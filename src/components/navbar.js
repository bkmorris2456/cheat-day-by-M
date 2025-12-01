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

export default function Navbar() {
    
    return (
        <Box 
            sx={{
                flexGrow: 1,
            }}
        >
            <AppBar position="static"
                sx={{
                    width: "100%",
                    backgroundColor: "gray",
                }}
            >
                <Toolbar>
                    <Typography variant="h6"
                        sx={{
                            mr: 12,
                        }}
                    >
                        Cheat Day by Malia
                    </Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
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
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={console.log("Profile Pressed!")}
                        color="inherit"
                    >
                       <Person2Icon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )

}