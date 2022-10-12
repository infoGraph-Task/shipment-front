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
import './view.css';
import { useNavigate } from "react-router-dom";



const api = " http://localhost:3010";
export default function ViewFedex() {

    const nav = useNavigate()

    // const shipmentContext = useContext(ShipmentContext)
    const [shipmentsFedex, setShipmentFedex] = useState([])

    const getShipmentsFedexForUser = async () => {
        axios.get(`${api}/getallshipmentfedex/${cookie.load('userId')}`, {
            headers: {
                'Authorization': `Bearer ${cookie.load("token")}`
            }
        }).then(res => {
            console.log(1111, res.data)

            setShipmentFedex(res.data);

            console.log('shipmentsFedex', shipmentsFedex)

        })
    }
    useEffect(() => {
        getShipmentsFedexForUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    })
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
                            fedex shipments
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
                {shipmentsFedex?.map(ele => {
                    return (

                        <div id='card-id'>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {ele.FedExID}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div">
                                        carrierServiceID : {ele.carrierServiceID}
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        package details :
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div">
                                        width :  {ele.width} cm
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div">
                                        height:   {ele.height} cm
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div">
                                        length: {ele.length} cm
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div">
                                        weight:  {ele.weight} g
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