import * as React from 'react';
import { Button} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

export default function TitlebarBelowImageList() {
  return (
    
    <ImageList gap={20} 
    variant="standard"   cols={3} >

          <ImageListItem key="Subheader" cols={3} rows={4} >
        <ListSubheader sx={{fontSize:60,textAlign:'center',marginBottom:2}} component="div"> Dinning Rooms </ListSubheader>
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
    img: 'https://i.pinimg.com/564x/e3/04/56/e304561eea2de03b8bf1ee1cd3411c0b.jpg',
    title: 'Gray with Gold DinningRoom',
    author: '61,500',
    
  },
  {
    img: 'https://i.pinimg.com/564x/6c/29/c8/6c29c8b966297a84404561bf1adadae8.jpg',
    title: 'Golden beige dinningroom',
    author: '22,0000',
  },
  {
    img: 'https://i.pinimg.com/564x/02/41/06/024106680a91390d040c12eb75c8f2bd.jpg',
    title: 'white&gold Dinningroom',
    author: '30,0000',
  },
  {
    img: 'https://i.pinimg.com/736x/d5/5c/29/d55c29c0c9c7c21e46ced3b9a81fde2e.jpg',
    title: 'Blue Dinningroom ',
    author: '13,000',
  },
  {
    img: 'https://i.pinimg.com/564x/cd/bd/3b/cdbd3bd7d4bb3f90118fda21acef2ef5.jpg',
    title: 'Green with Gold Dinningroom ',
    author: '16,000',
  },
  { img: 'https://i.pinimg.com/564x/d3/d1/c1/d3d1c1087b7f0fdf0614ce29c5410086.jpg',
    title: 'Black Dinningroom with white table ',
    author: '20,000',
  },
  {
    img: 'https://i.pinimg.com/564x/0f/f1/06/0ff1065df7ccfa7f864b719a15af3d08.jpg',
    title: 'Pink Dinningroom with Woody table ',
    author: '19,500',
  },
  {
    img: 'https://i.pinimg.com/564x/ba/25/8d/ba258d5b200958dce3d61adaece5a929.jpg',
    title: 'white Dinningroom with White table ',
    author: '25,300',
  },
  {
    img: 'https://i.pinimg.com/564x/88/c6/cb/88c6cb638ed51d1ee7db3ee5ba4e3636.jpg',

    title: 'Gray Dinningroom with black table ',
    author: '23,500',
  }

];
