import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link'

// 组件

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';


export default function Navbar() {
    return(
        <Box className='navbar'>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                height:'60px'
            }}>
                <Link href='/'>
                    <Box className='navbarlogo'>
                        <Avatar alt="Remy Sharp" 
                        src="https://www.rainbowkit.com/rainbow.svg" 
                        variant='square'
                        sx={{
                            borderRadius:'10px',
                        }}
                        />
                    </Box>
                </Link>
                
                <Box className='link-router'>
                    <Box>
                        <Link href="/">Airdrop</Link>
                        <Link href="/pagetwo">IDO</Link>
                        <Link href='/'>POOL</Link>
                    </Box>  
                </Box>
                <Box className='wallet' >
                    <ConnectButton />
                </Box>   
            </Box>
            
        </Box>
    )    
}