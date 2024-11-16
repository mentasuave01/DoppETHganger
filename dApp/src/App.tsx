import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  bitkubTestnet,
  scrollSepolia,
  unichainSepolia,
  zircuitTestnet,
} from "viem/chains";
import type { Chain } from "viem";
import { http, createClient } from "viem";
import unichainLogo from "@/assets/unichain.svg";
import Dapp from "./Dapp";

const viemChainToCustomNetwork = (viemChain: Chain, iconUrl?: string) => {
  return {
    blockExplorerUrls: viemChain.blockExplorers?.default?.url
      ? [viemChain.blockExplorers.default.url]
      : [],
    chainId: viemChain.id,
    chainName: viemChain.name,
    iconUrls: iconUrl ? [iconUrl] : [],
    name: viemChain.name,
    nativeCurrency: {
      decimals: viemChain.nativeCurrency.decimals,
      name: viemChain.nativeCurrency.name,
      symbol: viemChain.nativeCurrency.symbol,
    },
    networkId: viemChain.id,
    rpcUrls: viemChain.rpcUrls?.default?.http
      ? [...viemChain.rpcUrls.default.http]
      : [],
  };
};

const wagmiConfig = createConfig({
  chains: [scrollSepolia, unichainSepolia, zircuitTestnet, bitkubTestnet],
  client({ chain }) {
    return createClient({
      chain,
      transport: http(),
    });
  },
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <DynamicContextProvider
      theme="dark"
      settings={{
        environmentId: "c9802102-90b0-4281-b2c9-b521cae5fa29",
        walletConnectors: [EthereumWalletConnectors],
        overrides: {
          evmNetworks: [
            viemChainToCustomNetwork(
              scrollSepolia,
              "https://img.cryptorank.io/coins/scroll1693474620599.png"
            ),
            viemChainToCustomNetwork(
              zircuitTestnet,
              "https://docs.zircuit.com/~gitbook/image?url=https%3A%2F%2F1825535913-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FFAE3Bv5wcSjxEUOFI86x%252Fsites%252Fsite_zN0g8%252Ficon%252FcAxPUEdkkbPkK3darqPB%252Fzircuit-logo.png%3Falt%3Dmedia%26token%3Db3e9a161-4508-434e-84d5-2612a5a5e17c&width=32&dpr=2&quality=100&sign=1059f47f&sv=1"
            ),
            viemChainToCustomNetwork(unichainSepolia, unichainLogo),
            viemChainToCustomNetwork(
              bitkubTestnet,
              "https://docs.bitkubchain.org/~gitbook/image?url=https%3A%2F%2F3978159860-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-Mj0rZxvH7baj3DJ6tND%252Ficon%252FX34SbPBXB5UM7ADVeEKe%252F188999344_115641790692695_1003447240682735844_n%2520%281%29.jpg%3Falt%3Dmedia%26token%3D5b25dd25-a668-4b98-b3ac-d0d120d78a90&width=32&dpr=2&quality=100&sign=71064b50&sv=1"
            ),
          ],
        },
      }}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <Dapp />
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
