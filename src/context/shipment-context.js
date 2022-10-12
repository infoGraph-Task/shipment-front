import React from "react";
import axios from "axios";
import cookie from 'react-cookies';
import { useState } from "react";
const api = 'https://infogragh-shpment.herokuapp.com';

export const ShipmentContext = React.createContext();
export default function Shipment(props) {
const [status,setStatus] = useState(0)
    //fedex shipments
    const createShipmentFedex = async (FedExID, carrierServiceID, width, height, length, weight) => {
        axios.post(`${api}/fedexCreate/${cookie.load('userId')}`, {
            FedExID: FedExID,
            carrierServiceID: carrierServiceID,
            width: width,
            height: height,
            length: length,
            weight: weight
        }, {
            headers: {
                'Authorization': `Bearer ${cookie.load("token")}`
            }
        }).then(res => {
            console.log(res.data)
            console.log(res.status)
            setStatus(res.status)
        })

    }

    // create ups shipments 
    const createShipmentUps = async (UPSID, shipmentServiceID, width, height, length, weight) => {
        axios.post(`${api}/upsCreate/${cookie.load('userId')}`, {
            UPSID: UPSID,
            shipmentServiceID: shipmentServiceID,
            width: width,
            height: height,
            length: length,
            weight: weight
        }, {
            headers: {
                'Authorization': `Bearer ${cookie.load("token")}`
            }
        }).then(res => {
            console.log(res.data);
        })
    }
   
    const state = {
        createShipmentFedex,
        createShipmentUps,
        status,

    }
    return (
        <ShipmentContext.Provider value={state}>
            {props.children}
        </ShipmentContext.Provider>
    )

}