import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListSubheader from '@mui/material/ListSubheader';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  return (
    
    <ImageList gap={10} sx={{marginX:10,marginTop:5 }}
    variant="standard"   cols={3} >

          <ImageListItem key="Subheader" cols={3} rows={4} >
        <ListSubheader sx={{fontSize:60,textAlign:'center',marginBottom:2}} component="div"> Children's Rooms</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>

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
    img: 'https://i.pinimg.com/736x/bf/ec/cc/bfecccf15d10cef27dd1d91e135feb2e.jpg',
    title:'Woody' ,
    author: '7,000',
   
    featured: true,
    
  },
  {
    img: 'https://www.ikea.com/images/a-tuffing-bunk-bed-in-a-childrens-room-with-a-football-and-t-d4fadd3a99c65081e26e5f0a27a6185c.jpg?f=xxxl',
    title: 'metalic',
    author: '10,000',
  },
  {
    img: 'https://i.pinimg.com/564x/60/79/b4/6079b4da446af445c24de54b75103bc8.jpg',
    title: 'white ',
    author: '18,000',
  },
  {
    img: 'https://i.pinimg.com/736x/bf/ec/cc/bfecccf15d10cef27dd1d91e135feb2e.jpg',
    title:'Woody' ,
    author: '7,000',
   
    featured: true,
    
  },
  {
    img: 'https://www.ikea.com/images/a-tuffing-bunk-bed-in-a-childrens-room-with-a-football-and-t-d4fadd3a99c65081e26e5f0a27a6185c.jpg?f=xxxl',
    title: 'metalic',
    author: '10,000',
  },
  {
    img: 'https://i.pinimg.com/564x/60/79/b4/6079b4da446af445c24de54b75103bc8.jpg',
    title: 'white ',
    author: '18,000',
  },
  {
    img: 'https://i.pinimg.com/736x/bf/ec/cc/bfecccf15d10cef27dd1d91e135feb2e.jpg',
    title:'Woody' ,
    author: '7,000',
   
    featured: true,
    
  },
  {
    img: 'https://www.ikea.com/images/a-tuffing-bunk-bed-in-a-childrens-room-with-a-football-and-t-d4fadd3a99c65081e26e5f0a27a6185c.jpg?f=xxxl',
    title: 'metalic',
    author: '10,000',
  },
  {
    img: 'https://i.pinimg.com/564x/60/79/b4/6079b4da446af445c24de54b75103bc8.jpg',
    title: 'white ',
    author: '18,000',
  },
  {
    img: 'https://i.pinimg.com/736x/bf/ec/cc/bfecccf15d10cef27dd1d91e135feb2e.jpg',
    title:'Woody' ,
    author: '7,000',
   
    featured: true,
    
  },
  {
    img: 'https://www.ikea.com/images/a-tuffing-bunk-bed-in-a-childrens-room-with-a-football-and-t-d4fadd3a99c65081e26e5f0a27a6185c.jpg?f=xxxl',
    title: 'metalic',
    author: '10,000',
  },
  {
    img: 'https://i.pinimg.com/564x/60/79/b4/6079b4da446af445c24de54b75103bc8.jpg',
    title: 'white ',
    author: '18,000',
  },
 
];
