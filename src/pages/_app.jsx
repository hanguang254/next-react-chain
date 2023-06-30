import Layout from './layout'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { zkSync, mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

//组件


// css样式
import "../style/navbar.css"
import '../style/index.css'
import '../style/AppNavbar.css'
import '../style/layout.css'

const { chains, publicClient } = configureChains(
    [zkSync],
    [
    //   alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })



export default function MyApp({ Component, pageProps }) {

  return (
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider 
          chains={chains} theme={darkTheme({
            accentColor:'linear-gradient(270deg, rgb(51, 212, 250) 0%, rgb(23, 243, 221) 100%)',
            accentColorForeground:'black'
          })}
          initialChain={zkSync}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
    </WagmiConfig>
    
  )
}