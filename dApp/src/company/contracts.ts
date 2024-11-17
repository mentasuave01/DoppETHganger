import type { Address } from "viem";
import { verifyABI, proxyFactoryABI } from "./abis";

export const verify_ABI = verifyABI;
export const proxyFactory_ABI = proxyFactoryABI;

export const verify_ADDRESS: { [key: number]: Address } = {
  11155111: "0x12249011215eaeC9F61137D862d8cA1C01a24CCf",
  1301: "0x12249011215eaeC9F61137D862d8cA1C01a24CCf",
  534351: "0x12249011215eaeC9F61137D862d8cA1C01a24CCf",
  48899: "0x12249011215eaeC9F61137D862d8cA1C01a24CCf",
};

export const proxyFactory_ADDRESS: { [key: number]: Address } = {
  11155111: "0x480Ccd392bde0E31A1f7b5183a1d697B29840d95",
  1301: "0x480Ccd392bde0E31A1f7b5183a1d697B29840d95",
  534351: "0x480Ccd392bde0E31A1f7b5183a1d697B29840d95",
  48899: "0x480Ccd392bde0E31A1f7b5183a1d697B29840d95",
};
