// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/Verify.sol";

contract DeployScript is Script {
    //ounter public counter;

    address user = 0xFe6577db195f007cca6a3fbe44cdAef15f386EF5;
    address enpointEthSepolia = 0x6EDCE65403992e310A62460808c4b910D972f10f;
    address enpointUnichin = 0xb8815f3f882614048CbE201a67eF9c6F10fe5035;
    address enpointScroll = 0x6EDCE65403992e310A62460808c4b910D972f10f;
    address enpointZircuit = 0x6EDCE65403992e310A62460808c4b910D972f10f;

    Verify verify;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        if (block.chainid == 11155111) {
            console.log("El id de la cadena es 11155111");
            verify = new Verify(enpointEthSepolia, user);
            console.log("Se ha creado el contrato Verify");
        } else if (block.chainid == 1301) {
            console.log("El id de la cadena es 1301");
            verify = new Verify(enpointUnichin, user);
            console.log("Se ha creado el contrato Verify");
        } else if (block.chainid == 534351) {
            console.log("El id de la cadena es 534351");
            verify = new Verify(enpointScroll, user);
            console.log("Se ha creado el contrato Verify");
        } else if (block.chainid == 48899) {
            console.log("El id de la cadena es 48899");
            verify = new Verify(enpointZircuit, user);
            console.log("Se ha creado el contrato Verify");
        } else {
            console.log("El id de la cadena no es ninguno de los esperados");
        }

        vm.stopBroadcast();
    }
}
