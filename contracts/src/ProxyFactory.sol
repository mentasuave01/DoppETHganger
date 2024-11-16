// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ProxyFactory {
    event ProxyDeployed(address proxy, string saltString, bytes32 saltBytes);

    function stringToSalt(string memory _str) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_str));
    }

    function calculateProxyAddress(string memory _saltString) public view returns (address) {
        bytes32 salt = stringToSalt(_saltString);
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
    function deployProxy(string memory _saltString) external returns (address) {
        bytes32 salt = stringToSalt(_saltString);
        address proxy = address(new Proxy{salt: salt}());
        emit ProxyDeployed(proxy, _saltString, salt);
        return proxy;
    }
}

// Proxy kawaii uwu
contract Proxy {
    fallback() external payable {}
    receive() external payable {}
}