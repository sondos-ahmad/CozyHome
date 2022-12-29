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
        <ListSubheader sx={{fontSize:60,textAlign:'center',marginBottom:2}} component="div">Offices</ListSubheader>
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
    img: 'https://i.pinimg.com/564x/90/ce/6b/90ce6bc4395b396ee48aea004ba99841.jpg',
    title: 'white Office',
    author: '5,000 ',
    
  },
  {
    img: 'https://i.pinimg.com/564x/58/20/79/5820796ee729c449358db3908692cf30.jpg',
    title: ' gray Office',
    author: '2,935 ',
  },
  {
    img: 'https://i.pinimg.com/564x/22/7e/a7/227ea78f702a3137d43a5a4c977548d0.jpg',
    title: 'Wood & Black Office',
    author: ' 7,935',
  },

  {
    img: 'https://i.pinimg.com/564x/f0/40/0b/f0400bd481268d3e56e07e2dd7bd7002.jpg',

    title: 'Doble Office',
    author: '15,000',
  },
  {
    img: 'https://i.pinimg.com/564x/5c/06/e6/5c06e61ec927698b8cada304f8847844.jpg',
    title: 'woody Doble Office ',
    author: '72,935 ',
  },

  {
    img: 'https://i.pinimg.com/564x/90/ce/6b/90ce6bc4395b396ee48aea004ba99841.jpg',
    title: 'white Office',
    author: '5,000 ',
    
  },
  {
    img: 'https://i.pinimg.com/564x/58/20/79/5820796ee729c449358db3908692cf30.jpg',
    title: ' gray Office',
    author: '2,935 ',
  },
  {
    img: 'https://i.pinimg.com/564x/22/7e/a7/227ea78f702a3137d43a5a4c977548d0.jpg',
    title: 'Wood & Black Office',
    author: ' 7,935',
  },
  {
    img: 'https://i.pinimg.com/564x/90/ce/6b/90ce6bc4395b396ee48aea004ba99841.jpg',
    title: 'white Office',
    author: '5,000 ',
    
  },
  {
    img: 'https://i.pinimg.com/564x/58/20/79/5820796ee729c449358db3908692cf30.jpg',
    title: ' gray Office',
    author: '2,935 ',
  },
  {
    img: 'https://i.pinimg.com/564x/22/7e/a7/227ea78f702a3137d43a5a4c977548d0.jpg',
    title: 'Wood & Black Office',
    author: ' 7,935',
  },
  {
    img: 'https://i.pinimg.com/564x/0c/be/d7/0cbed7761b22a0e8064767653a56fa5e.jpg',
    title: '  woody gray Office',
    author: '2,935 ',
  },
];
