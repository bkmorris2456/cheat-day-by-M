import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    MenuIcon
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();
    
    return (
        // Main container for navbar
        <AppBar position="static"
            sx={{
                backgroundColor: "gray",
                position: "fixed",
                width: "100%",
                zIndex: 1000,
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >

            {/* left-side, company name */}
                <Typography 
                    variant="h6"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                >
                    Cheat Day by Malia
                </Typography>

            {/* middle, pages */}
                <Box sx={{display: "flex", gap: 2}}>
                    <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
                    <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
                    <Button color="inherit" onClick={() => navigate("/posts")}>Posts</Button>
                </Box>

            {/* right, profile and shopping cart */}

                <Box sx={{display: "flex", gap: 1}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => navigate("/profile")}
                        color="inherit"
                    >
                    <Person2Icon/>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={console.log('About Pressed!!')}
                        color="inherit"
                    >
                        <ShoppingCartIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )

}