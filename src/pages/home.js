import Navbar from '../components/navbar';
import {Box, Grid, Typography, TextField} from "@mui/material";


export default function Home() {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#b69c7a",
            }}
        >

            <Navbar/>

            <TextField id="outlined-basic" label="Search Here!" variant="outlined" 
                sx={{
                    marginTop: "10vh",
                }}

            />
        </Box>
    );

}