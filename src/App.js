import './App.css';
import Auth from './context/auth'
import Home from './components/home';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/sign-up';
import Shipment from './context/shipment-context';
import ViewUps from './components/view-shipment/view-ups'
import ViewFedex from './components/view-shipment/view-fedex';
function App() {
  return (
    <div className="App">
      <Auth>
        <Shipment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/fedex/shipments" element={<ViewUps />} />
            <Route path="/ups/shipments" element={<ViewFedex />} />


          </Routes>
        </Shipment>
      </Auth>
    </div>
  );
}

export default App;
