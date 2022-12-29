import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListSubheader from '@mui/material/ListSubheader';
import { Button} from '@mui/material';
export default function TitlebarBelowImageList() {
  return (
    
    <ImageList gap={20} 
    variant="standard"   cols={3} >
          <ImageListItem key="Subheader" cols={3} rows={4} >
        <ListSubheader sx={{fontSize:60,textAlign:'center',marginBottom:2}} component="div">BedRooms</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >

          <img

            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
        
          />
          <ImageListItemBar
        
           title={ <span> <h4>{item.title }</h4></span>}
      
            subtitle={
            <span> <h3> Price : {item.author} EGP  </h3>
            <div> 
        
                <Button variant="contained" color='success'>Add To Cart<ShoppingCartIcon /></Button>
</div>  
       
        </span>
        }
    
          />
       
        </ImageListItem>
      ))}
      
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.ikea.com/images/a-white-hemnes-bed-in-a-bright-room-surrounded-by-sheer-whit-737c777fa87266829bd62fa39505b6ed.jpg?f=xxxl',
    title: 'white bedroom with Country-style tranquility',
    author: '35,000 ',
    
  },
  {
    img: 'https://i.pinimg.com/564x/58/45/86/584586fcc86abe15e9b87a7a9f51f353.jpg',
    title: 'beige & green bedroom',
    author: '42,935 ',
  },
  {
    img: 'https://i.pinimg.com/564x/51/cc/25/51cc2594d7aa9373a87e1bd9c992850b.jpg',
    title: 'Wood & Black bedroom',
    author: ' 72,935',
  },
  {
    img: 'https://i.pinimg.com/564x/0c/10/28/0c10288da6d2eac570b049ac229bcead.jpg',
    title: 'gray bedroom',
    author: '51,935 ',
  },
  {
    img: 'https://i.pinimg.com/564x/f2/b7/b6/f2b7b65dd9728a919dcac0b14595aff6.jpg',

    title: 'white bedroom with Genzari',
    author: '35,000',
  },
  {
    img: 'https://i.pinimg.com/564x/58/9e/5b/589e5becf6175764eb13c32fdc22e889.jpg',
    title: 'woody bedroom',
    author: '72,935 ',
  },
  {
    img: 'https://i.pinimg.com/564x/ab/3c/fb/ab3cfb541c37d2094f099bf678a1db6f.jpg',
    title: 'Black Bed ',
    author: '12,935',
  },
  {
    img: 'https://i.pinimg.com/564x/c8/b0/61/c8b061c3d76103d9917ccff201fc7a14.jpg',
    title: 'woody bedroom',
    author: '39,0000  ',
  },
  {
    img: 'https://i.pinimg.com/564x/58/45/86/584586fcc86abe15e9b87a7a9f51f353.jpg',
    title: 'beige & green bedroom',
    author: '72,935 ',
  },
  {
    img: 'https://i.pinimg.com/564x/e7/cd/b3/e7cdb31759866f0fefe35f369a456af1.jpg',
    title: 'Woody bedroom with Country-style tranquility',
    author: '75,000',
  },
  {
    img: 'https://i.pinimg.com/564x/7c/19/90/7c1990badcef2684af712a0e8ff26c86.jpg',
    title: 'Modern woody bedroom',
    author: '25,0000 ',
  },
  {
    img: 'https://i.pinimg.com/564x/51/cc/25/51cc2594d7aa9373a87e1bd9c992850b.jpg',
    title: 'Dark bedroom',
    author: '40,0000',
  },
];

