import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link'

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';


export default function AppNavbar(){
    return(
        <Box className='App-navbar'>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                height:'60px'
            }}>
                <Link href='/'>
                    <Box className='App-navbarlogo'>
                        <Avatar alt="Remy Sharp" 
                        src="https://www.rainbowkit.com/rainbow.svg" 
                        variant='square'
                        sx={{
                            borderRadius:'10px',
                        }}
                        />
                    </Box>
                </Link>
                
                <Box className='App-link-router'>
                    <Box>
                        <Link href="/">Airdrop</Link>
                        <Link href="/pagetwo">IDO</Link>
                        <Link href='/'>3</Link>
                    </Box>  
                </Box>
                <Box className='App-wallet' >
                    <ConnectButton />
                </Box>   
            </Box>
            
        </Box>
    )
}