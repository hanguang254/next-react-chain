// 组件
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//css

//hooks
import { Web3 } from 'web3';
import {ethers} from 'ethers';
import { useNetwork,useAccount } from 'wagmi'
import { useEffect } from 'react';

export default function Home(){
    const { chain } = useNetwork()
    const {address, isConnecting, isDisconnected} = useAccount()
    console.log(address, isConnecting, isDisconnected)

    
    async function switchToEthereum() {
        try {
            if(chain.id !==324)  {
                await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: "0x144"
                    }
                    ]
                });
            }
        
        } catch (error) {
            console.log(error);
        }
     }

    useEffect(() => {
        
        switchToEthereum();
    },[])
    

    return (
        <Container maxWidth="false" sx={{
            display: 'flex',
            justifyContent: 'center',
          }} disableGutters>
            
            <Box className="airdrop-body">
                <Box sx={{
                    width:'100%',
                    height:'100%',
                    textAlign:'center'
                }}>
                    <Box><h1 className='title-drop'>Airdrop is ended!</h1></Box>
                    <Box sx={{color:'white'}}>正文</Box>
                    <Box>
                        <Button variant="contained">claim</Button>
                        <Button variant="contained">mint</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
                    
    )
 
}

