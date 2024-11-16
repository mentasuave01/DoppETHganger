// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import {OApp, Origin, MessagingFee} from "@layerzerolabs/oapp-evm/contracts/oapp/OApp.sol";
import {OAppOptionsType3} from "@layerzerolabs/oapp-evm/contracts/oapp/libs/OAppOptionsType3.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Master is OApp, OAppOptionsType3 {
    struct lzMetadata {
        address endpoint;
        uint32 EID;
    }
    mapping(uint256 => lzMetadata) public lz;

    uint16 public constant SEND = 1;

    constructor(
        address _endpoint,
        address _owner
    ) OApp(_endpoint, _owner) Ownable(_owner) {
        // ETH Sepolia Testnet
        lz[11155111] = lzMetadata(
            0x6EDCE65403992e310A62460808c4b910D972f10f,
            40161
        );
        // Base Testnet
        lz[84532] = lzMetadata(
            0x6EDCE65403992e310A62460808c4b910D972f10f,
            40245
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
    }

    // Some arbitrary data you want to deliver to the destination chain!
    mapping(address => bytes1) answer;

    function send(
        //uint32 _chainId,
        address _addressToVerify,
        //bytes calldata _options
        bytes calldata _extraSendOptions
    ) external payable {
        // Encodes the message before invoking _lzSend.
        // Replace with whatever data you want to send!
        /*bytes memory _payload = abi.encode(_addressToVerify);
        _lzSend(
            lz[_chainId].EID,
            _payload,
            _options,
            // Fee in native gas and ZRO token.
            MessagingFee(msg.value, 0),
            // Refund address in case of failed source message.
            payable(msg.sender)
        );*/
        //send to base

        uint32[] memory _dstEids = new uint32[](2);
        _dstEids[0] = lz[84532].EID;
        _dstEids[1] = lz[534351].EID;

        // Calculate the total messaging fee required.
        MessagingFee memory totalFee = quote(
            _dstEids,
            SEND,
            _addressToVerify,
            _extraSendOptions,
            false
        );
        require(msg.value >= totalFee.nativeFee, "Insufficient fee provided");

        // Encodes the message before invoking _lzSend.
        bytes memory _encodedMessage = abi.encode(_addressToVerify);

        uint256 totalNativeFeeUsed = 0;
        uint256 remainingValue = msg.value;

        for (uint i = 0; i < _dstEids.length; i++) {
            bytes memory options = combineOptions(
                _dstEids[i],
                SEND,
                _extraSendOptions
            );
            MessagingFee memory fee = _quote(
                _dstEids[i],
                _encodedMessage,
                options,
                false
            );

            totalNativeFeeUsed += fee.nativeFee;
            remainingValue -= fee.nativeFee;

            // Ensure the current call has enough allocated fee from msg.value.
            require(
                remainingValue >= 0,
                "Insufficient fee for this destination"
            );

            _lzSend(
                _dstEids[i],
                _encodedMessage,
                options,
                fee,
                payable(msg.sender)
            );
        }
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
        address, // Executor address as specified by the OApp.
        bytes calldata // Any extra data or options to trigger on receipt.
    ) internal override {
        // Decode the payload to get the message
        // In this case, type is string, but depends on your encoding!
        address data = abi.decode(payload, (address));
        answer[data] = checkIfAddressIsAContract(data)
            ? bytes1(hex"01")
            : bytes1(hex"10");

        if (answer[data] == bytes1(hex"01")) {
            // If the address has no bytecode, it is a contract so we need to send 1 gwei to the sender
            (bool success, ) = address(data).call{value: 1}("");
        }
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

    function getAnswer(address _addr) public view returns (bytes1) {
        return answer[_addr];
    }

    function quote(
        uint32[] memory _dstEids,
        uint16 _msgType,
        address _message,
        bytes calldata _extraSendOptions,
        bool _payInLzToken
    ) public view returns (MessagingFee memory totalFee) {
        bytes memory encodedMessage = abi.encode(_message);

        for (uint i = 0; i < _dstEids.length; i++) {
            bytes memory options = combineOptions(
                _dstEids[i],
                _msgType,
                _extraSendOptions
            );
            MessagingFee memory fee = _quote(
                _dstEids[i],
                encodedMessage,
                options,
                _payInLzToken
            );
            totalFee.nativeFee += fee.nativeFee;
            totalFee.lzTokenFee += fee.lzTokenFee;
        }
    }

    function depositIntoContract() public payable onlyOwner {}

    function withdrawFromContract() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
