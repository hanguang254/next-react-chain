import Layout from '../components/layout'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { zkSync, mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';

//组件
import { useState, useEffect } from "react";
import AppNavbar from '../components/App/AppNavbar';
import Navbar from '../components/navbar'


// css样式
import "../style/navbar.css"
import '../style/index.css'
import '../style/AppNavbar.css'

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
  const walletName = 'Wallet';

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 800);
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // 初始化检查一次
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider 
          chains={chains} theme={darkTheme({
            accentColor:'linear-gradient(270deg, rgb(51, 212, 250) 0%, rgb(23, 243, 221) 100%)',
            accentColorForeground:'black'
          })}
          initialChain={zkSync}>
          {isSmallScreen ? <AppNavbar walletName={walletName} /> :<Navbar /> }
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* footer */}
        </RainbowKitProvider>
    </WagmiConfig>
    
  )
}