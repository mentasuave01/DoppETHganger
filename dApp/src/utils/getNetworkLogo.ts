export const getChainTab = (chain: string): string => {
  switch (chain) {
    case "ethereum":
      return "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg";
    case "polygon":
      return "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg";
    case "optimism":
      return "https://icons.llamao.fi/icons/chains/rsz_optimism.jpg";
    case "arbitrum":
      return "https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg"; //TODO CHANGE FOR ETH SEPOLLIA

    default:
      return "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg";
  }
};

export default getChainTab;
