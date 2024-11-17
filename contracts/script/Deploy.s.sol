// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/LaunchProxyContract.sol";

contract DeployScript is Script {
    //ounter public counter;

    address user = 0x49D79bc86881bfE1B6327702360F5697E5D9A185;
    address enpointEthSepolia = 0x6EDCE65403992e310A62460808c4b910D972f10f;
    address enpointUnichin = 0xb8815f3f882614048CbE201a67eF9c6F10fe5035;
    address enpointScroll = 0x6EDCE65403992e310A62460808c4b910D972f10f;
    address enpointZircuit = 0x6EDCE65403992e310A62460808c4b910D972f10f;

    LaunchProxyContract c;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        if (block.chainid == 11155111) {
            console.log("El id de la cadena es 11155111");
            c = new LaunchProxyContract(enpointEthSepolia, user);
            console.log("Se ha creado el contrato Verify");
        } else if (block.chainid == 1301) {
            console.log("El id de la cadena es 1301");
            c = new LaunchProxyContract(enpointUnichin, user);
            console.log("Se ha creado el contrato Verify");
        } else if (block.chainid == 534351) {
            console.log("El id de la cadena es 534351");
            c = new LaunchProxyContract(enpointScroll, user);
            console.log("Se ha creado el contrato Verify");
        } else if (block.chainid == 48899) {
            console.log("El id de la cadena es 48899");
            c = new LaunchProxyContract(enpointZircuit, user);
            console.log("Se ha creado el contrato Verify");
        } else {
            console.log("El id de la cadena no es ninguno de los esperados");
        }

        vm.stopBroadcast();
    }
}
