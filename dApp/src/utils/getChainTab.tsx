import bitkubTab from "@/assets/bitkubTab.webp";
import scrollTab from "@/assets/scrollTab.webp";
import zirkuitTab from "@/assets/zirkuitTab.webp";
import unichainTab from "@/assets/unichainTab.webp";

export const getChainTab = (chain: number): string => {
  switch (chain) {
    case 534351:
      return scrollTab;
    case 48899:
      return zirkuitTab;
    case 1301:
      return unichainTab;
    case 25925:
      return bitkubTab;

    default:
      return unichainTab;
  }
};

export default getChainTab;
