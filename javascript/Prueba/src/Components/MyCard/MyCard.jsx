import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function MyCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {data.img}
          alt="porsche 911"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name ? data.name : "vacio"}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.specie ? data.specie: "texto vacio"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}