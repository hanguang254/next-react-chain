import React, { Component } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default class pagethree extends Component {
  render() {
    return (
      <Container maxWidth='false' disableGutters sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '92vh',
      }}>
        <Box className='pool-body' sx={{
          borderRadius: "20px",
          // background:  "rgba(231, 233, 248, 0.7)",
          // border: "3px solid" ,
          // borderColor:  "rgb(156, 81, 255)",
          marginLeft: "10px",
          marginRight: "10px",
        }}>
          <h2 style={{
            fontSize: "30px",
            fontWeight: "bold",
            color:"rgb(156, 81, 255)",
            textAlign:"center",
          }}>under development ...</h2>
        </Box>
    </Container>
    )
  }
}
