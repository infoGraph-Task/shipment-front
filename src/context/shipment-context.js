import React from "react";
import axios from "axios";
import cookie from 'react-cookies';

const api = " http://localhost:3010";

export const ShipmentContext = React.createContext();
export default function Shipment(props) {
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
        })

    }
    // getting fedex shipments for a user
    const getShipmentsFedexForUser = async () => {
        axios.get(`${api}/getallshipmentfedex/${cookie.load('userId')}`, {
            headers: {
                'Authorization': `Bearer ${cookie.load("token")}`
            }
        }).then(res => {
            console.log(res.data);
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
    // get ups shipments for the user

    const getShipmentsUpsForUser = async () => {
        axios.get(`${api}/getallshipmentups/${cookie.load('userId')}`, {
            headers: {
                'Authorization': `Bearer ${cookie.load("token")}`
            }
        }).then(res => {
            console.log(res.data)
        })
    }
    const state = {
        createShipmentFedex,
        getShipmentsFedexForUser,
        createShipmentUps,
        getShipmentsUpsForUser,
    }
    return (
        <ShipmentContext.Provider value={state}>
            {props.children}
        </ShipmentContext.Provider>
    )

}