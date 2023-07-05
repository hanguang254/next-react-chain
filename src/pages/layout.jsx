

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import { useEffect,useState } from 'react';
import AppNavbar from '../components/App/AppNavbar';
import Navbar from '../components/navbar'


export default function Layout({ children }) {

  const walletName = 'Wallet';
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 844);
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // 初始化检查一次
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
    return (
      <>    
          {isSmallScreen ? <AppNavbar walletName={walletName} /> :<Navbar /> }
          <main>
            {children}
          </main>
      </>
    )
  }