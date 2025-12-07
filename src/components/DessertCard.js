import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Card component that displays initial dessert information, clicking leads to more in-depth page with details
export default function DessertCard({ dessert }) {

    return (
        <Card 
            sx={{ 
                width: 250, 
                height: 300,
                borderRadius: 3, 
                boxShadow: 3,
                backgroundColor: "lightgray",
                padding: 2,
             }}
        >
        <CardActionArea component={Link} to={`/desserts/${dessert.id}`}>
            <CardMedia
            component="img"
            height="180"
            image={dessert.image}
            alt={dessert.name}
            />

            <CardContent>
                <Typography gutterBottom variant="h6">
                    {dessert.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {dessert.shortDescription}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    {dessert.price} USD
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );

}
