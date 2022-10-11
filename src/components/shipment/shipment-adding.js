
import { When } from 'react-if'
import { AuthContext } from '../../context/auth';
import { useContext, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { ShipmentContext } from '../../context/shipment-context';
import './shipment-adding.css'
const currencies = [
    {
        value: 'fedexAIR',
        label: 'fedexAIR',
    },
    {
        value: 'fedexGroud',
        label: 'fedexGroud',
    },
];
const currencies2 = [
    {
        value: 'UPSExpress',
        label: 'UPSExpress',
    },
    {
        value: 'UPS2DAY',
        label: 'UPS2DAY',
    },
];

export default function ShipmentComponent() {
    const authContext = useContext(AuthContext)
    const shipmentContext = useContext(ShipmentContext)
    // const [UPSID,setUPSID]=useState('')
    const [carrierServiceID, setcarrierServiceID] = useState('')
    const [widthFedex, setWidthFedex] = useState(0)
    const [heightFedex, setHeightFedex] = useState(0)
    const [lengthFedex, setLengthFedex] = useState(0)
    const [weightFedex, setWeightFedex] = useState(0)

    const [shipmentServiceID, setShipmentServiceID] = useState('')
    const [widthUps, setWidthUps] = useState(0)
    const [heightUps, setHeightUps] = useState(0)
    const [lengthUps, setLengthUps] = useState(0)
    const [weightUps, setWeightUps] = useState(0)
    const handleSubmitFedex = (e) => {
        e.preventDefault();
        console.log('fedex', carrierServiceID, widthFedex, heightFedex, lengthFedex, weightFedex)
        shipmentContext.createShipmentFedex('fedex', carrierServiceID, widthFedex, heightFedex, lengthFedex, weightFedex)
    }
    const handleSubmitUps = (e) => {
        e.preventDefault();
        shipmentContext.createShipmentUps('ups', shipmentServiceID, widthUps, heightUps, lengthUps, weightUps)
    }
    return (

        <When condition={authContext.isLoggedIn}>
            <div id='fedex-form'>
                <h1 id='fedexid'>
                    FedEx
                </h1>

                <Box component="form" noValidate onSubmit={handleSubmitFedex} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TextField style={{ marginTop: '10px' }}
                        id="outlined-select-currency"
                        select
                        label="Select"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setcarrierServiceID(e.target.value)
                        }}
                        helperText="Please select your  carrierService ID"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="width"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                        }}
                        variant="filled"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setWidthFedex(e.target.value)
                        }}
                    />
                    <TextField
                        label="height"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                        }}
                        variant="filled"
                        onChange={(e) => {
                            console.log(e.target.value);

                            setHeightFedex(e.target.value)
                        }}
                    />
                    <TextField
                        label="length"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                        }}
                        variant="filled"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setLengthFedex(e.target.value)
                        }}
                    />
                    <TextField
                        label="weight"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">gram</InputAdornment>,
                        }}
                        variant="filled"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setWeightFedex(e.target.value)
                        }}
                    />



                    <div id='fedex-submit'>
                        <Button variant="contained" disableElevation type='submit'>
                            create shipment
                        </Button>
                    </div>
                </Box>
            </div>


            <div id='fedex-form'>
                <h1 id='fedexid'>
                    UPS
                </h1>

                <Box component="form" noValidate onSubmit={handleSubmitUps} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TextField style={{ marginTop: '10px' }}
                        id="outlined-select-currency"
                        select
                        label="Select"
                        onChange={(e) => {
                            console.log(e.target.value);

                            setShipmentServiceID(e.target.value)
                        }}
                        helperText="Please select your  shipmentService ID"
                    >
                        {currencies2.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="width"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">inch</InputAdornment>,
                        }}
                        variant="filled"
                        onChange={(e) => {
                            console.log(e.target.value);

                            setWidthUps(e.target.value)
                        }}
                    />
                    <TextField
                        label="height"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">inch</InputAdornment>,
                        }}
                        variant="filled"
                        onChange={(e) => {
                            console.log(e.target.value);

                            setHeightUps(e.target.value)
                        }}
                    />
                    <TextField
                        label="length"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">inch</InputAdornment>,
                        }}
                        variant="filled"
                        setLengthUps
                        onChange={(e) => {
                            console.log(e.target.value);

                            setLengthUps(e.target.value)
                        }}
                    />
                    <TextField
                        label="weight"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">pound</InputAdornment>,
                        }}
                        variant="filled"
                        onChange={(e) => {
                            console.log(e.target.value);

                            setWeightUps(e.target.value)
                        }}
                    />


                    <div id='fedex-submit'>
                        <Button type='submit' variant="contained" disableElevation>
                            create shipment
                        </Button>
                    </div>

                </Box>
            </div>


        </When>

    );
}