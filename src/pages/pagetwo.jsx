import React, { useState, useEffect } from 'react';
//组件
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export default function Pagetwo(){
    //测试合约0xCb2c20D74140c6EdE5838Ef9e6C034a509e809db

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 15,
        borderRadius: 8,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 8,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));
    
    const [progress, setProgress] = useState(0);
    const endPoint = 80;

    useEffect(() => {
    // 模拟进度更新
    const timer = setInterval(() => {
        setProgress((prevProgress) =>
         prevProgress >= endPoint ? endPoint : Math.min(prevProgress + 1, endPoint)
        );
    }, 0);

    return () => {
        clearInterval(timer);
    };
    }, []);


    return(
        <Container disableGutters sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '92vh'
        }}>
            <Box className='IDO-body'>
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Box ><h1 className='ido-title'>IDO:白名单销售</h1></Box>
                    
                    <Box className='ido-linear' sx={{width:'100%' ,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        <BorderLinearProgress sx={{width:'80%'}} variant="determinate" value={progress} />
                        <h4>{progress}%</h4>
                    </Box>
                    
                    
                    <Box>正文</Box>
                    <Box>预售输入框</Box>
                    <Box>预售按钮</Box>
                </Box>
                
            </Box>
        </Container>
    )
}