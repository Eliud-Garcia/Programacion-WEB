import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardTest({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://static.nationalgeographicla.com/files/styles/image_3200/public/green-iguana.webp?w=1600&h=1067&q=100"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.id}.
          {data.name ? data.name : "vacio"}

        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {data.description}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardTest;