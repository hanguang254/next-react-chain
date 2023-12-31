import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link'

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';




export default function AppNavbar(props){

    const { walletName } = props;
    return(
        
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-around',
        }} className='app-navbar'>
            <Link href='/'>
                <Box className='app-navbarlogo'>
                    <Avatar alt="Remy Sharp" 
                    src="/StarPrizePool.png" 
                    variant='square'
                    sx={{
                        borderRadius:'10px',
                    }}
                    />
                </Box>
            </Link>
            
            <Box className='app-link-router'>
                <Box>
                    <Link href="/">Airdrop</Link>
                    <Link href="/pagetwo">IDO</Link>
                    <Link href='/pagethree'>POOL</Link>
                </Box>  
            </Box>
            <Box className='app-wallet' >
                <ConnectButton label={walletName} accountStatus="avatar"/>
            </Box>   
        </Box>
            
       
    )
}
