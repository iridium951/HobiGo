import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function EventCard({data}) {
  return (
    <>
      
      <Card elevation={0} style={{ borderRadius: "15px", margin: '16px', minWidth: "244", maxHeight: "240", overflow: 'hidden' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="117"
            image={data.image}
            alt="Event Image"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "outfit", fontSize:"18px" }}>
            {data.title}
            </Typography>
            <Typography marginBottom="0.5rem"variant="body1" color="text.secondary" style={{ fontFamily: "outfit", overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {data.about}
              

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
