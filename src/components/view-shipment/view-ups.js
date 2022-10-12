import React, { useState, useEffect } from 'react';
// import { ShipmentContext } from '../../context/shipment-context'
import axios from "axios";
import cookie from 'react-cookies';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";

const api = " http://localhost:3010";

export default function ViewUps() {
    const [shipmentsUps, setShipmentUps] = useState([])
    const nav = useNavigate()
    const getShipmentsUpsForUser = async () => {
        axios.get(`${api}/getallshipmentups/${cookie.load('userId')}`, {
            headers: {
                'Authorization': `Bearer ${cookie.load("token")}`
            }
        }).then(res => {
            console.log(res.data)
            setShipmentUps(res.data)
            console.log(shipmentsUps)

        })
    }
    useEffect(() => {
        getShipmentsUpsForUser()
    },[])
    return (
        <>


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
                            ups shipments
                        </Typography>
                        <FormControl >

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>

                                </FormControl>
                            </Box>
                        </FormControl>
                        <Button color="inherit"
                            onClick={(e) => {
                                e.preventDefault();
                                nav('/')
                            }}
                        >Home </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div id='fedex-ships'>
            {shipmentsUps?.map(ele => {
                return (

                        <div id='card-id'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {ele.UPSID}
                                </Typography>
                                <Typography gutterBottom variant="body2" component="div">
                                    shipmentServiceID : {ele.shipmentServiceID}
                                </Typography>
                                <Typography gutterBottom variant="h7" component="div">
                                    package details :
                                </Typography>
                                <Typography gutterBottom variant="body2" component="div">
                                    width :  {ele.width} inch
                                </Typography>
                                <Typography gutterBottom variant="body2" component="div">
                                    height:   {ele.height} inch
                                </Typography>
                                <Typography gutterBottom variant="body2" component="div">
                                    length: {ele.length} inch
                                </Typography>
                                <Typography gutterBottom variant="body2" component="div">
                                    weight:  {ele.weight} pound
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                        </div>

                )

            })}
            </div>
        </>

    )
}
