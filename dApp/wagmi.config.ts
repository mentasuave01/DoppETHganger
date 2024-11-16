import { defineConfig } from "@wagmi/cli";
import { actions, react } from "@wagmi/cli/plugins";
import { CONTRACTS } from "./src/company";
import {
  unichainSepolia,
  scrollSepolia,
  zircuitTestnet,
  sepolia,
} from "wagmi/chains";
import type { Abi } from "viem";

export default defineConfig({
  out: "@company/contracts.ts",
  contracts: [
    {
      name: "verify",
      abi: CONTRACTS.verify_ABI as Abi,
      address: {
        [sepolia.id]: CONTRACTS.verify_ADDRESS[
          unichainSepolia.id
        ] as `0x${string}`,
        [zircuitTestnet.id]: CONTRACTS.verify_ADDRESS[
          zircuitTestnet.id
        ] as `0x${string}`,
        [scrollSepolia.id]: CONTRACTS.verify_ADDRESS[
          scrollSepolia.id
        ] as `0x${string}`,
        [unichainSepolia.id]: CONTRACTS.verify_ADDRESS[
          unichainSepolia.id
        ] as `0x${string}`,
      },
    },
  ],
  plugins: [actions(), react()],
});
