import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Cozy Home
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
  
      
      <Box
        component="footer"
        sx={{
          py:2,
          px: 4,
          mt: 'auto',
          backgroundColor: "#5d4037",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" sx={{color:"beige"}}>
            Contact us +02333333
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}