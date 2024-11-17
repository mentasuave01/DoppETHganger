// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {IMailbox} from "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ProxyFactory} from "./ProxyFactory.sol";

contract LaunchProxyContract is OApp {
    struct lzMetadata {
        uint32 EID;
    }
    mapping(uint256 => lzMetadata) public lz;

    address immutable proxyFactoryAddress;

    bytes constant OPTION = hex"000301001101000000000000000000000000000186A0";

    mapping(uint256 => address) public proxies;



    constructor(
        address HyperlaneMailbox,
        address _owner
    ) Ownable(_owner) {
        mailboxHyperlane = HyperlaneMailbox;
        // ETH Sepolia Testnet
        lz[11155111] = lzMetadata(
            11155111
        );
        // Unichin Testnet
        lz[1301] = lzMetadata(
            1301
        );
        // Scroll Testnet
        lz[534351] = lzMetadata(
            534351
        );
        // Zircuit Testnet
        lz[48899] = lzMetadata(
            48899
        );
        //Bitkub Testnet
        lz[25925] = lzMetadata(
            25925
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
        IMailbox(mailboxHyperlane).dispatch{value: gasFeeToPay}(
            lz[_chainId].EID,
                hyperlaneAddress,
                abi.encode(_salt),
            );
        

        address uxAddress = ProxyFactory(proxyFactoryAddress).deployProxy(
            _salt
        );

        proxies[_salt] = uxAddress;
    }

    /function handle(
        uint32 _origin,
        bytes32 _sender,
        bytes calldata _data
    ) external payable virtual {
        if (msg.sender != mailboxHyperlane) {
            revert();
        }
        if (
            _sender != evvmMetadata.hyperlaneAddress &&
            _origin != evvmMetadata.hyperlaneChain
        ) {
            revert();
        }

        address uxAddress = ProxyFactory(proxyFactoryAddress).deployProxy(
            abi.decode(_data, (uint256))
        );

        proxies[abi.decode(_data, (uint256))] = uxAddress;
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
}
