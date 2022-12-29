import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import {Button} from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
export default function TitlebarBelowImageList() {
  return (
    
    <ImageList gap={20} 
    variant="standard"   cols={3} >

          <ImageListItem key="Subheader" cols={3} rows={4} >
        <ListSubheader sx={{fontSize:60,textAlign:'center',marginBottom:2}} component="div">Living Rooms</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} maxHeight maxWidth >

          <img

            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            maxHeight maxWidth
          />
          <ImageListItemBar
   
                
title={ <span> <h4>{item.title }</h4></span>}
      
      subtitle={
      <span> <h3> Price : {item.author} EGP  </h3>
      <div> 
  
          <Button variant="contained" color='success'> Add To Cart<ShoppingCartIcon /></Button>
</div>  
 
  </span> }/>
        </ImageListItem>
      ))}
      
    </ImageList>
    
  );
 
}


const itemData = [
  {
    img: 'https://i.pinimg.com/750x/d6/af/70/d6af7085e1f7f0e1c9536c0eca5582ed.jpg',
    title: 'Mintgreen with beige Livingroom',
    author: '25,000',
    
  },
  {
    img: 'https://i.pinimg.com/564x/59/df/f6/59dff652c3a675d0cd541ebc50d6b0a5.jpg',
    title:' beige Livingroom',
    author: '35,000',
  },
  {
    img: 'https://i.pinimg.com/736x/5a/ed/66/5aed66092a0b401dc2a0d256cca24319.jpg',
    title: 'Brawon livingroom ',
    author: '18,000',
  },
  {
    img: 'https://i.pinimg.com/564x/d3/4d/c4/d34dc4444ef9c69198b17195437f1f35.jpg',
    title: 'Dark Blue Livingroom',
    author: '25,000',
  },
  {
    img: 'https://i.pinimg.com/564x/c9/86/79/c9867950747acdb064e3a9135be80437.jpg',
    title: 'Green&beige Livingroom',
    author: '17,000',
  },
  {
    img: 'https://i.pinimg.com/564x/40/e2/e2/40e2e2db128c081994d1431274102f6e.jpg',
    title: 'Blue Livingroom',
    author: '10,000',
  },
  {
    img: 'https://i.pinimg.com/564x/b7/00/f3/b700f33100f3cd7d4f1df65cbdbc0365.jpg',
    title: 'Pink & white livingroom',
    author: '57,0000',
  },
  {
    img: 'https://i.pinimg.com/564x/98/f2/9d/98f29d59bf84d8f86c6807c962f59d64.jpg',
    title: 'Green livingroom  ',
    author: '25,000',
  },

  {
    img: 'https://i.pinimg.com/564x/59/df/f6/59dff652c3a675d0cd541ebc50d6b0a5.jpg',
    title:'Mintgreen with beige Livingroom',
    author: '35,000',
  },
  {
    img: 'https://i.pinimg.com/564x/22/12/f3/2212f33ab58a2de2adac792d9b1f6672.jpg',
    title: 'Blue & white Livingroom',
    author: '40,000',
  },
  
    {
      img: 'https://i.pinimg.com/564x/b7/00/f3/b700f33100f3cd7d4f1df65cbdbc0365.jpg',
      title: 'Pink & white livingroom',
      author: '57,0000',
    },
    {
      img: 'https://i.pinimg.com/750x/d6/af/70/d6af7085e1f7f0e1c9536c0eca5582ed.jpg',
      title: 'Mintgreen with beige Livingroom',
      author: '25,000',
      
    },
];
