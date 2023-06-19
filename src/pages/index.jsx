// 组件
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//css

//hooks


export default function Home(){


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

