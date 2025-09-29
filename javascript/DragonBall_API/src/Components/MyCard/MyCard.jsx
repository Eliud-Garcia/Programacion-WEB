import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

 const MyCard = ({character}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= {character.image}
          alt={"Imagen del personaje " + character.name}
          sx={{objectFit: 'contain', height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.id ? character.id + ". ": "sin id"}
            {character.name ? character.name : "vacio"}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', overflowY: 'auto', maxHeight: 100, fontSize: 18}}>
            {character.description ? character.description: "texto vacio"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MyCard