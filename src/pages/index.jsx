// 组件
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
//css

//hooks
import { Web3 } from 'web3';
import {ethers} from 'ethers';
import { useNetwork,useContractWrite } from 'wagmi'
import { useEffect,useState } from 'react';

import ABI from '../abi/mint.json';

export default function Home(){
    const { chain } = useNetwork()
    const [Network, setNetwork] = useState(true);
    const [Loading,setLoading] = useState(true);

    function handleClick() {
      setLoading(false);
    }

    const wagmigotchiABI =ABI;
    // console.log(wagmigotchiABI);
    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: '0x92FcBEEddF2625333506837676b20bD5f99Ce9DB',
        abi: wagmigotchiABI,
        functionName: '_mint',
        onSuccess: () => {
          setLoading(true);
        },
        onError: ()=>{
          setLoading(true);
        }
    });
    
    async function switchToZkSync() {
        try {
          if (chain.id !== 324) {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x144' }],
            });
          }
        } catch (error) {
          console.log(error);
        }
        setNetwork(true);
      }
    
      useEffect(() => {
        async function handleNetworkChange() {
            setNetwork(false);
        }

        const ethereum = window.ethereum;
        if (ethereum && ethereum.removeListener) {
          ethereum.addListener('networkChanged', handleNetworkChange);

          return () => {
            ethereum.removeListener('networkChanged', handleNetworkChange);
          };
        }
    
      }, [chain]);
    
      useEffect(() => {
            switchToZkSync();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [Network]); // 只在组件挂载时调用一次
    

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // 添加此行以使内容居中
            height: '100vh', // 使用视口高度作为容器高
          }} disableGutters>
            <Box className="airdrop-body">
                <Box sx={{
                    width:'100%',
                    height:'100%',
                    textAlign:'center'
                }}>
                    <Box><h1 className='title-drop'>Airdrop is ended!</h1></Box>
                    <Box sx={{color:'white'}}>正文</Box>
                    <Box className='button-body' sx={{ display: 'flex',justifyContent:'center' }}>
                        <Button 
                            variant="contained" 
                            disabled={!Network}
                            color='info'
                        >claim</Button>
                        <Box sx={{ width: '50px' }}></Box>
                        <Button variant="contained" disabled={!Network || !Loading} 
                            color='info'
                            onClick={()=>{
                              handleClick();
                              write();
                            }}
                            
                          >{Loading?"mint":"Loading.."}</Button>
                    </Box>
                </Box>
            </Box>
          
        </Container>
                    
    )
 
}

