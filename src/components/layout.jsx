import React, { useState, useEffect } from "react";



import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import AppNavbar from './App/navbarApp';
import Navbar from './navbar'

export default function Layout({ children }) {

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
      <Container maxWidth='false' disableGutters>
        {isSmallScreen ? <AppNavbar /> :<Navbar /> }
        {/* <Navbar /> */}
        <main>{children}</main>
        
      </Container>
    )
  }