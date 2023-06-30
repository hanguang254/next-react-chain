

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



export default function Layout({ children }) {
    return (
      <Container maxWidth='false' disableGutters>
          {children}
      </Container>
    )
  }