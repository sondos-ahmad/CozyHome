import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import {Box} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function TitlebarBelowImageList() {
  return (
    
    <ImageList gap={20} 
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
    
