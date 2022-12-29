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
<<<<<<< HEAD
import ListSubheader from '@mui/material/ListSubheader';
import { IconButton } from '@mui/material';
import { Button} from '@mui/material';
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
    
=======


export default function MediaCard() {
  return (
    <Box paddingX = {10}>
      <Grid container><Card sx={{ maxWidth: 345 , margin: 2}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color='success'>Add to cart<ShoppingCartIcon /></Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345  , margin: 2}}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color='success'>Add to cart<ShoppingCartIcon /></Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 345  , margin: 2}}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color='success'>Add to cart<ShoppingCartIcon /></Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 345  , margin: 2}}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color='success'>Add to cart<ShoppingCartIcon /></Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 345  , margin: 2}}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color='success'>Add to cart<ShoppingCartIcon /></Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 345  , margin: 2}}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color='success'>Add to cart<ShoppingCartIcon /></Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 345  , margin: 2}}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color='success'>Add to cart<ShoppingCartIcon /></Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 345  , margin: 2}}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color='success'>Add to cart<ShoppingCartIcon /></Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 345  , margin: 2}}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color='success'>Add to cart<ShoppingCartIcon /></Button>
    </CardActions>
  </Card>
  </Grid>
  </Box>
>>>>>>> c6a6a84b21693560919db486ee0653c14c29a72c
  );
}