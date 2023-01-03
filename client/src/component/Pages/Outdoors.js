import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import { Button} from '@mui/material';
export default function TitlebarBelowImageList() {
  return (
    
    <ImageList gap={10} sx={{marginX:10,marginTop:5 }}
    variant="standard"   cols={3} >

          <ImageListItem key="Subheader" cols={3} rows={4} >
        <ListSubheader sx={{fontSize:60,textAlign:'center',marginBottom:2}} component="div">Outdoors</ListSubheader>
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
    img: 'https://i.pinimg.com/564x/60/a2/03/60a203038e661eb984ada275c5961d28.jpg',
    title: ' patio simply georgeous',
    author: '13,000',
    
  },
  {
    img: 'https://i.pinimg.com/564x/ff/d4/f0/ffd4f0f17be27488b2d7d056e5522bb7.jpg',
    title: 'swinging bench.',
    author: '7,000',
  },
 

  {
    img: 'https://i.pinimg.com/564x/a5/7a/3d/a57a3dc7392f5b1f06b972f40e025523.jpg',
    title: 'roof',
    author: '18,000',
  },
  {
    img: 'https://i.pinimg.com/564x/a5/7a/3d/a57a3dc7392f5b1f06b972f40e025523.jpg',
    title: ' concrete outdoor sofa',
    author: '11,500',
  },
  {
    img: 'https://i.pinimg.com/564x/fb/ba/fb/fbbafbe9571f945b35c3101d6bd6d40b.jpg',
    title: 'concrete outdoor sofa',
    author: '10,000',
  },
  {
    img: 'https://i.pinimg.com/564x/f3/e6/f1/f3e6f1fcaea25a7f6859c696ae5acad1.jpg',
    title: 'Outdoors',
    author: '15,000',
  },
  {
    img: 'https://i.pinimg.com/736x/fa/61/f6/fa61f63ca2b60a473693baefc1686d88.jpg',
    title: 'swinging bench.',
    author: '7,000',
  },
  {
    img: 'https://i.pinimg.com/564x/d5/46/7f/d5467fcea601e50919035d419790c2b7.jpg',
    title: 'swinging bench.',
    author: '7,000',
  },
  {
    img: 'https://i.pinimg.com/564x/60/a2/03/60a203038e661eb984ada275c5961d28.jpg',
    title: ' patio simply georgeous',
    author: '13,000',
    
  },
  {
    img: 'https://i.pinimg.com/564x/60/a2/03/60a203038e661eb984ada275c5961d28.jpg',
    title: ' patio simply georgeous',
    author: '13,000',
    
  },
  {
    img: 'https://i.pinimg.com/564x/ff/d4/f0/ffd4f0f17be27488b2d7d056e5522bb7.jpg',
    title: 'swinging bench.',
    author: '7,000',
  },
 

  {
    img: 'https://i.pinimg.com/564x/a5/7a/3d/a57a3dc7392f5b1f06b972f40e025523.jpg',
    title: 'roof',
    author: '18,000',
  },
  {
    img: 'https://i.pinimg.com/564x/a5/7a/3d/a57a3dc7392f5b1f06b972f40e025523.jpg',
    title: ' concrete outdoor sofa',
    author: '11,500',
  },
  {
    img: 'https://i.pinimg.com/564x/fb/ba/fb/fbbafbe9571f945b35c3101d6bd6d40b.jpg',
    title: 'concrete outdoor sofa',
    author: '10,000',
  },
  {
    img: 'https://i.pinimg.com/564x/f3/e6/f1/f3e6f1fcaea25a7f6859c696ae5acad1.jpg',
    title: 'Outdoors',
    author: '15,000',
  },
  {
    img: 'https://i.pinimg.com/736x/fa/61/f6/fa61f63ca2b60a473693baefc1686d88.jpg',
    title: 'swinging bench.',
    author: '7,000',
  },
  {
    img: 'https://i.pinimg.com/564x/d5/46/7f/d5467fcea601e50919035d419790c2b7.jpg',
    title: 'swinging bench.',
    author: '7,000',
  },
  {
    img: 'https://i.pinimg.com/564x/60/a2/03/60a203038e661eb984ada275c5961d28.jpg',
    title: ' patio simply georgeous',
    author: '13,000',
    
  },
];
