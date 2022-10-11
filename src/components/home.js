import Header from './header'
// import ShipmentAdding from './shipment-adding'
// import ViewShipments from './view-shipments'
import SignIn from './log-in'
import ShipmentComponent from './shipment/shipment-adding'
import { When } from 'react-if'
import { AuthContext } from '../context/auth';
import React, { useContext } from 'react';
function Home() {
    const authContext = useContext(AuthContext)
    return (
        <>
            <When condition={!authContext.isLoggedIn}>

                <SignIn />
            </When>
            <Header />
            <ShipmentComponent />


        </>
    )
}
export default Home;