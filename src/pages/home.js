import Navbar from '../components/navbar';
import {Box, Grid, Typography} from "@mui/material";

export default function Home() {

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#b69c7a",
                padding: 3,
            }}
        >
            <Grid container spacing={4} direction="column" alignItems="center">
                <Grid item sm={12} sx={{display: "flex"}}>
                    <Typography variant="h1" color="black">Banner Image Here</Typography>
                </Grid>
                <Grid item sm={12} 
                    sx={{
                        width: "80%",
                    }}
                >
                    <Typography variant="h1">Navbar here</Typography>
                    <Navbar/>
                </Grid>
                <Grid item sm={12}>
                    Searchbar Here
                </Grid>
                <Grid item sm={12}>
                    Component to load multiple dessert cards here
                </Grid>
            </Grid>
        </Box>
    );

}