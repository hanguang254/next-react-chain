

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



export default function Layout({ children }) {
    return (
      <Container disableGutters>
          {children}
      </Container>
    )
  }