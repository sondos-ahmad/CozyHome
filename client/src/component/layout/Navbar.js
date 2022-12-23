import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,MenuItem,Autocomplete,TextField} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Data from "./Data.json";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const[items,setItems]=React.useState(null);
  const[categories,setCategories]=React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isCartOpen =Boolean(items);
  const isSideMenuOpen = Boolean(categories);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleCart=(event)=>{
    setItems(event.currentTarget);
  };
  const handleCartClose=()=>{
    setItems(null);
  };
  const handleSideMenuOpen=(event)=>{
    setCategories(event.currentTarget);
  };
  const handleSideMenuClose=()=>{
    setCategories(null);
  };
  const renderSideMenu = (
    <Menu
      anchorEl={categories}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isSideMenuOpen}
      onClose={handleSideMenuClose}
    >
      <MenuItem onClick={handleSideMenuClose}>Bed Rooms</MenuItem>
      <MenuItem onClick={handleSideMenuClose}>Dinning Rooms</MenuItem>
      <MenuItem onClick={handleSideMenuClose}>Living Rooms</MenuItem>
      <MenuItem onClick={handleSideMenuClose}>Children's Rooms</MenuItem>
      <MenuItem onClick={handleSideMenuClose}>Offices</MenuItem>
      <MenuItem onClick={handleSideMenuClose}>Outdoor</MenuItem>
    </Menu>
  );
  const renderCart = (
    <Menu
      anchorEl={items}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isCartOpen}
      onClose={handleCartClose}
    >
      <MenuItem onClick={handleCartClose}>product 1</MenuItem>
      <MenuItem onClick={handleCartClose}>product 2</MenuItem>
    </Menu>
  );
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to ='login'>Log In</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to ='register'>Register</Link></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{  flexGrow: 1 }}>
      <AppBar style={{ background: '#efebe9' }}position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#5d4037"
            aria-label="open drawer"
            onClick={handleSideMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#5d4037"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Cozy Home
          </Typography>
          <Search style={{background: '#5d4037'}}>
            <Autocomplete
            sx={{width:300}}
            freeSolo
           id="combo-box-demo"
           options={Data.map((option) => option.name)}
           renderInput={(params) => <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <SearchIcon sx={{ color: 'action.active' ,mr:1  }} />
           <TextField {...params} id="input-with-sx" label="Search" variant="standard" />
         </Box>
        }
          />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-haspopup="true"
              color="#5d4037"
              onClick={handleCart}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#5d4037"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="#5d4037"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderSideMenu}
      {renderMenu}
      {renderCart}
    </Box>
    
  );
}