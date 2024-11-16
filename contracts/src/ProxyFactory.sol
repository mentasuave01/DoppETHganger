// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ProxyFactory {


    function calculateProxyAddress(uint256 _saltNumber) public view returns (address) {
        bytes32 salt = bytes32(_saltNumber);
        bytes memory bytecode = type(Proxy).creationCode;
        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                salt,
                keccak256(bytecode)
            )
        );
        return address(uint160(uint256(hash)));
    }

    // Deploy con salt kawaii owo
    function deployProxy(uint256 _saltNumber) external returns (address) {
        bytes32 salt = bytes32(_saltNumber);
        address proxy = address(new Proxy{salt: salt}());
        return proxy;
    }
}

// Proxy kawaii uwu
contract Proxy {
    fallback() external payable {}
    receive() external payable {}
}