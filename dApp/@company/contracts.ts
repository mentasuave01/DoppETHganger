import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// verify
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const verifyAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_endpoint', internalType: 'address', type: 'address' },
      { name: '_owner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'allowInitializePath',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endpoint',
    outputs: [
      {
        name: '',
        internalType: 'contract ILayerZeroEndpointV2',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '_sender', internalType: 'address', type: 'address' },
    ],
    name: 'isComposeMsgSender',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'lz',
    outputs: [
      { name: 'endpoint', internalType: 'address', type: 'address' },
      { name: 'EID', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_executor', internalType: 'address', type: 'address' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzReceive',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'proxies',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'salt', internalType: 'string', type: 'string' },
    ],
    name: 'quote',
    outputs: [
      { name: 'nativeFee', internalType: 'uint256', type: 'uint256' },
      { name: 'lzTokenFee', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_chainId', internalType: 'uint32', type: 'uint32' },
      { name: '_salt', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'send',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_delegate', internalType: 'address', type: 'address' }],
    name: 'setDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_chainId', internalType: 'uint256', type: 'uint256' },
      { name: '_peerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'peer',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'PeerSet',
  },
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [], name: 'LzTokenUnavailable' },
  {
    type: 'error',
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'NoPeer',
  },
  {
    type: 'error',
    inputs: [{ name: 'msgValue', internalType: 'uint256', type: 'uint256' }],
    name: 'NotEnoughNative',
  },
  {
    type: 'error',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'OnlyEndpoint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

/**
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const verifyAddress = {
  1301: '0x12249011215eaeC9F61137D862d8cA1C01a24CCf',
  48899: '0x12249011215eaeC9F61137D862d8cA1C01a24CCf',
  534351: '0x12249011215eaeC9F61137D862d8cA1C01a24CCf',
  11155111: '0x12249011215eaeC9F61137D862d8cA1C01a24CCf',
} as const

/**
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const verifyConfig = { address: verifyAddress, abi: verifyAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerify = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"allowInitializePath"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyAllowInitializePath = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'allowInitializePath',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"endpoint"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyEndpoint = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'endpoint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"isComposeMsgSender"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyIsComposeMsgSender = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'isComposeMsgSender',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"lz"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyLz = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'lz',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"nextNonce"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyNextNonce = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'nextNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"oAppVersion"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyOAppVersion = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'oAppVersion',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyOwner = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"peers"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyPeers = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'peers',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"proxies"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyProxies = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'proxies',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"quote"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const readVerifyQuote = /*#__PURE__*/ createReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'quote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link verifyAbi}__
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const writeVerify = /*#__PURE__*/ createWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"lzReceive"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const writeVerifyLzReceive = /*#__PURE__*/ createWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const writeVerifyRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const writeVerifySend = /*#__PURE__*/ createWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"setDelegate"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const writeVerifySetDelegate = /*#__PURE__*/ createWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"setPeer"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const writeVerifySetPeer = /*#__PURE__*/ createWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const writeVerifyTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link verifyAbi}__
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const simulateVerify = /*#__PURE__*/ createSimulateContract({
  abi: verifyAbi,
  address: verifyAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"lzReceive"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const simulateVerifyLzReceive = /*#__PURE__*/ createSimulateContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const simulateVerifyRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const simulateVerifySend = /*#__PURE__*/ createSimulateContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"setDelegate"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const simulateVerifySetDelegate = /*#__PURE__*/ createSimulateContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"setPeer"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const simulateVerifySetPeer = /*#__PURE__*/ createSimulateContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const simulateVerifyTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link verifyAbi}__
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const watchVerifyEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: verifyAbi,
  address: verifyAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link verifyAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const watchVerifyOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: verifyAbi,
    address: verifyAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link verifyAbi}__ and `eventName` set to `"PeerSet"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const watchVerifyPeerSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: verifyAbi,
  address: verifyAddress,
  eventName: 'PeerSet',
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerify = /*#__PURE__*/ createUseReadContract({
  abi: verifyAbi,
  address: verifyAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"allowInitializePath"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyAllowInitializePath =
  /*#__PURE__*/ createUseReadContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'allowInitializePath',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"endpoint"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyEndpoint = /*#__PURE__*/ createUseReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'endpoint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"isComposeMsgSender"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyIsComposeMsgSender =
  /*#__PURE__*/ createUseReadContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'isComposeMsgSender',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"lz"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyLz = /*#__PURE__*/ createUseReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'lz',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"nextNonce"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyNextNonce = /*#__PURE__*/ createUseReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'nextNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"oAppVersion"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyOAppVersion = /*#__PURE__*/ createUseReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'oAppVersion',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyOwner = /*#__PURE__*/ createUseReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"peers"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyPeers = /*#__PURE__*/ createUseReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'peers',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"proxies"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyProxies = /*#__PURE__*/ createUseReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'proxies',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"quote"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useReadVerifyQuote = /*#__PURE__*/ createUseReadContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'quote',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link verifyAbi}__
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWriteVerify = /*#__PURE__*/ createUseWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"lzReceive"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWriteVerifyLzReceive = /*#__PURE__*/ createUseWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWriteVerifyRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWriteVerifySend = /*#__PURE__*/ createUseWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"setDelegate"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWriteVerifySetDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"setPeer"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWriteVerifySetPeer = /*#__PURE__*/ createUseWriteContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWriteVerifyTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link verifyAbi}__
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useSimulateVerify = /*#__PURE__*/ createUseSimulateContract({
  abi: verifyAbi,
  address: verifyAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"lzReceive"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useSimulateVerifyLzReceive =
  /*#__PURE__*/ createUseSimulateContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'lzReceive',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useSimulateVerifyRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useSimulateVerifySend = /*#__PURE__*/ createUseSimulateContract({
  abi: verifyAbi,
  address: verifyAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"setDelegate"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useSimulateVerifySetDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'setDelegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"setPeer"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useSimulateVerifySetPeer = /*#__PURE__*/ createUseSimulateContract(
  { abi: verifyAbi, address: verifyAddress, functionName: 'setPeer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link verifyAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useSimulateVerifyTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: verifyAbi,
    address: verifyAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link verifyAbi}__
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWatchVerifyEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: verifyAbi,
  address: verifyAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link verifyAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWatchVerifyOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: verifyAbi,
    address: verifyAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link verifyAbi}__ and `eventName` set to `"PeerSet"`
 *
 * - [__View Contract on Unichain Sepolia Uniscan__](https://sepolia.uniscan.xyz/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Zircuit Testnet Zircuit Testnet Explorer__](https://explorer.testnet.zircuit.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x12249011215eaeC9F61137D862d8cA1C01a24CCf)
 */
export const useWatchVerifyPeerSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: verifyAbi,
    address: verifyAddress,
    eventName: 'PeerSet',
  })
