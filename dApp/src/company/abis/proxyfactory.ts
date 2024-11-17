export const proxyFactoryABI = [
  {
    type: "function",
    name: "calculateProxyAddress",
    inputs: [{ name: "_saltNumber", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deployProxy",
    inputs: [{ name: "_saltNumber", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "nonpayable",
  },
];
