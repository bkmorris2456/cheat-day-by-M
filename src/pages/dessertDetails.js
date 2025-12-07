import { useLocation } from "react-router-dom";
import { Box, Typography, CardMedia } from "@mui/material";

export default function DessertDetails() {
    const location = useLocation();
    const { dessert } = location.state;

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h3" gutterBottom>
                {dessert.name}
            </Typography>
            <CardMedia
                component="img"
                height="400"
                image={dessert.image}
                alt={dessert.name}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
                {dessert.price} USD
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
                {dessert.shortDescription}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
                {dessert.longDescription} {/* optional more info */}
            </Typography>
        </Box>
    );
}