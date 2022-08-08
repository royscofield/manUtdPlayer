import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CardInfo({ image, playerName, playerNumber }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 5}}>
        <CardMedia
            component="img"
            alt="ddg"
            height="280"
            image={image}
        />
        <CardContent CardContent>
            <Typography gutterBottom variant="h5" component="div" >
                {playerNumber}
            </Typography>
        
            <Typography variant="body2" color="text.secondary">
                {playerName} 
            </Typography>
        </CardContent>
    </Card>
  );
}

export default CardInfo