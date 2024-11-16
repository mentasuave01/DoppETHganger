// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {OApp, Origin, MessagingFee} from "@layerzerolabs/oapp-evm/contracts/oapp/OApp.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ProxyFactory} from "./ProxyFactory.sol";

contract LaunchProxyContract is OApp {
    struct lzMetadata {
        address endpoint;
        uint32 EID;
    }
    mapping(uint256 => lzMetadata) public lz;

    address immutable proxyFactoryAddress;

    bytes constant OPTION = hex"000301001101000000000000000000000000000186A0";

    mapping(uint256 => address) public proxies;

    constructor(
        address _endpoint
    ) OApp(_endpoint, msg.sender) Ownable(msg.sender) {
        // ETH Sepolia Testnet
        lz[11155111] = lzMetadata(
            0x6EDCE65403992e310A62460808c4b910D972f10f,
            40161
        );
        // Unichin Testnet
        lz[1301] = lzMetadata(
            0xb8815f3f882614048CbE201a67eF9c6F10fe5035,
            40333
        );
        // Scroll Testnet
        lz[534351] = lzMetadata(
            0x6EDCE65403992e310A62460808c4b910D972f10f,
            40170
        );
        // Zircuit Testnet
        lz[48899] = lzMetadata(
            0x6EDCE65403992e310A62460808c4b910D972f10f,
            40275
        );

        proxyFactoryAddress = address(new ProxyFactory());
    }

    function send(
        uint32 _chainId,
        uint256 _salt //bytes calldata _options
    ) external payable {
        if (proxies[_salt] != address(0)) {
            revert("Proxy already deployed");
        }
        _lzSend(
            lz[_chainId].EID,
            abi.encode(_salt),
            OPTION,
            // Fee in native gas and ZRO token.
            MessagingFee(msg.value, 0),
            // Refund address in case of failed source message.
            payable(msg.sender)
        );

        address uxAddress = ProxyFactory(proxyFactoryAddress).deployProxy(
            _salt
        );

        proxies[_salt] = uxAddress;
    }

    /**
     * @dev Called when data is received from the protocol. It overrides the equivalent function in the parent contract.
     * Protocol messages are defined as packets, comprised of the following parameters.
     * @param _origin A struct containing information about where the packet came from.
     * @param _guid A global unique identifier for tracking the packet.
     * @param payload Encoded message.
     */
    function _lzReceive(
        Origin calldata _origin,
        bytes32 _guid,
        bytes calldata payload,
        address,
        bytes calldata
    ) internal override {

        address uxAddress = ProxyFactory(proxyFactoryAddress).deployProxy(
            abi.decode(payload, (uint256))
        );

        proxies[abi.decode(payload, (uint256))] = uxAddress;
    }

    function quote(
        uint256 _chainId, // The destination chain ID.
        string memory salt
    ) public view returns (uint256 nativeFee, uint256 lzTokenFee) {
        bytes memory _payload = abi.encode(salt);
        MessagingFee memory fee = _quote(
            lz[_chainId].EID,
            _payload,
            OPTION,
            false
        );
        return (fee.nativeFee, fee.lzTokenFee);
    }

    function setPeer(
        uint256 _chainId,
        address _peerAddress
    ) public virtual onlyOwner {
        peers[lz[_chainId].EID] = bytes32(uint256(uint160(_peerAddress))); // Array of peer addresses by destination.
        emit PeerSet(lz[_chainId].EID, bytes32(uint256(uint160(_peerAddress)))); // Event emitted each time a peer is set.
    }

    function checkIfAddressIsAContract(
        address _addr
    ) internal view returns (bool) {
        uint32 size;
        assembly {
            size := extcodesize(_addr)
        }
        return size > 0;
    }
}
