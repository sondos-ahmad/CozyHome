import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PeopleIcon from '@mui/icons-material/People';
import {Link} from 'react-router-dom'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cozy Home DashBoard
          </Typography>
          <Button color="inherit">Users<PeopleIcon/></Button>
          <Button color="inherit"><Link style={{color:"white"}} to ="addproducts">Products</Link><AddCircleIcon/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}