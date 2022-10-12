import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { When } from 'react-if'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from "react-router-dom";



export default function Header() {
    const authContext = useContext(AuthContext);
    return (

        <When condition={authContext.isLoggedIn}>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Fedex & ups microservice
                        </Typography>
                        <FormControl >

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"> Shipments</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        //   value={age}
                                        label="Age"
                                    //   onChange={handleChange}
                                    >
                                        <Link to={"/fedex/shipments"} >

                                        <MenuItem >FedEx</MenuItem>
                                        </Link>
                                        <Link to={"/ups/shipments"} >

                                        <MenuItem >ups</MenuItem>
                                        </Link>
                                    </Select>
                                </FormControl>
                            </Box>
                        </FormControl>
                        <Button color="inherit"
                            onClick={(e) => {
                                e.preventDefault();
                                authContext.signOut();
                            }}
                        >sign out</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </When>
    )
}