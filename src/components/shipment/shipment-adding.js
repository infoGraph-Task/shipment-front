
import { When } from 'react-if'
import { AuthContext } from '../../context/auth';
import { useContext, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { ShipmentContext } from '../../context/shipment-context';
import './shipment-adding.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmitFedex = (e) => {
        e.preventDefault();
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
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <When condition={shipmentContext.status == '201'}>
                                    Shipment added successfully
                                </When>

                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <When condition={shipmentContext.status != '201'}>
                                  Shipment is not added , please Enter Valid input
                                </When>

                            </Typography>

                        </Box>
                    </Modal>
                </div>
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
                        <Button onClick={handleOpen} variant="contained" disableElevation type='submit'>
                            create shipment
                        </Button>

                    </div>
                </Box>
            </div>


            <div id='fedex-form'>
                <h1 id='fedexid'>
                    UPS
                </h1>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <When condition={shipmentContext.status == '201'}>
                                  Shipment added successfully
                                </When>

                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <When condition={shipmentContext.status != '201'}>
                                    Shipment is not added , please Enter Valid input
                                </When>

                            </Typography>

                        </Box>
                    </Modal>
                </div>

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
                        <Button onClick={handleOpen} type='submit' variant="contained" disableElevation>
                            create shipment
                        </Button>
                    </div>

                </Box>
            </div>


        </When>

    );
}