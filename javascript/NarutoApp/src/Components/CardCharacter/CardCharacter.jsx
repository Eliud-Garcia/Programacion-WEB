import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

//flechas 
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

//css
import './CardCharacter.css'

const MyCard = ({ character }) => {
    const [imgIndex, setImgIndex] = useState(0);
    
    const prevImage = () => {
        if(character.images && character.images.length > 0){
            setImgIndex((imgIndex - 1 + character.images.length) % character.images.length);
        }
    }

    const nextImage = () => {
        if(character.images && character.images.length > 0){
            setImgIndex((imgIndex + 1) % character.images.length);
        }
    }
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            
            <CardActionArea>
                <Box sx={{position: 'relative'}}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={character.images[imgIndex]}
                        alt={"Imagen del personaje " + character.name}
                        sx={{ objectFit: 'contain', height: 300 }}
                    />
                    {character.images && character.images.length > 1 && (
                        <>
                            <KeyboardArrowLeftIcon 
                                className='arrow'
                                sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                                onClick={prevImage}
                            />
                                
                            <KeyboardArrowRightIcon 
                                className='arrow'
                                sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                                onClick={nextImage}
                            />
                        </>
                    )}
                </Box>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {character.name ? character.name : "vacio"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', overflowY: 'auto', maxHeight: 100, fontSize: 18 }}>
                        {"Birthdate: " + (character.personal.birthdate ? character.personal.birthdate : "vacio")}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MyCard