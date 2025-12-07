import Navbar from '../components/navbar';
import {Box, Grid, Typography, Container, TextField} from "@mui/material";
import DessertCard from "../components/DessertCard";
import desserts from "../data/desserts";

export default function Home() {

    return (
        // Main Container
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#FFF",
            }}
        >

            {/* Navbar component */}
            <Navbar/>

            <Container 
                sx={{ 
                    py: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h4" sx={{ mb: 3, marginTop: "10vh", fontWeight: "bold" }}>
                    Our Desserts This Season
                </Typography>

                {/* Search bar to find specific dessert items */}
                <TextField id="outlined-basic" label="Search Here!" variant="outlined" 
                    sx={{
                        marginTop: "5vh",
                        marginBottom: "5vh",
                        width: "75%",
                    }}

                />

                <Grid container spacing={3} justifyContent="center">
                    {desserts.map((dessert) => (
                    <Grid item xs={12} sm={6} md={4} key={dessert.id}>
                        <DessertCard dessert={dessert} />
                    </Grid>
                    ))}
                </Grid>
            </Container>

        </Box>
    );

}