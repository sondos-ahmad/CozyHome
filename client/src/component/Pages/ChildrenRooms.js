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
import { IconButton } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';

import { Button} from '@mui/material';
export default function TitlebarBelowImageList() {
  return (
    
    <ImageList gap={20} 
    variant="standard"   cols={3} >

          <ImageListItem key="Subheader" cols={3} rows={4} >
        <ListSubheader sx={{fontSize:60,textAlign:'center',marginBottom:2}} component="div"> <h1>Children's Rooms</h1>Children's Rooms</ListSubheader>
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
    img: 'https://www.ikea.com/images/a-bedroom-with-a-kura-reversible-bed-with-blavingad-bed-line-86427688e72e376b1072ec74902d3984.jpg?f=xxxl',
    title: 'Dark Bed Room',
    author: '@bkristastucchio',
    Link: 'Dark Bed Room',
    featured: true,
    
  },
  {
    img: 'https://www.ikea.com/images/a-tuffing-bunk-bed-in-a-childrens-room-with-a-football-and-t-d4fadd3a99c65081e26e5f0a27a6185c.jpg?f=xxxl',
    title: 'Blue bed Room',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
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
  );
}
>>>>>>> c6a6a84b21693560919db486ee0653c14c29a72c
