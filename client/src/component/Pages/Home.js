import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Link, useHref } from 'react-router-dom';


export default function TitlebarImageList() {
  return (
    <ImageList gap={10} sx={{marginX:10,marginTop:5 }}variant="quilted"
    cols={3}
    >
      <ImageListItem key="Subheader" cols={3} rows={4} >
        <ListSubheader sx={{fontSize:60,textAlign:'center',marginBottom:2}} component="div">Categories</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=300&h=200&fit=crop&auto=format`}
            srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
         <Link to ={item.Link}> <ImageListItemBar
            title={item.title}
          /></Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da',
    title: 'Bed Room',
    Link: 'BedRooms',
    rows: 1,
    cols: 1,
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1505409628601-edc9af17fda6' ,
    title: 'Dinning Room',
    Link:'DinningRooms',
    rows: 1,
    cols: 1,
    featured: true,
 
  },
  {
    img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
    title: 'Living Rooms',
    Link :'LivingRooms',
    rows: 1,
    cols: 1,
    featured: true,

  },
  {
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gee-house-6-1536335251.jpg',
    title: "Children's rooms",
    Link :'ChildrenRooms',
    rows: 1,
    cols: 1,
    featured: true,

  },
  {
    img: 'https://m.media-amazon.com/images/I/71Vza6sh+0L._AC_SL1300_.jpg',
    title: 'Offices',
    Link :'Offices',
    rows: 1,
    cols: 1,
    featured: true,

  },
  {
    img: 'https://www.mymove.com/wp-content/uploads/2018/06/shutterstock_389852074-scaled.jpg',
    title: "Outdoor", 
    Link :'Outdoors',
    rows: 1,
    cols: 1,
    featured: true,

  }


];