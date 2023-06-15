import logo from './logo.svg';
import './App.css';
import 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register'
import UploadLile from './component/UploadLile';
import Clothbag from './component/product/Clothbag'
import TravelBags from './component/product/TravelBags';
import SummerSale from './component/product/SummerSale';
import { useLocation } from 'react-router-dom';
import ShoppingCart from './component/ShoppingCart';
import { Modal } from 'bootstrap';
import Checkout from './component/Checkout';
import { useSelector } from 'react-redux';
import Admin from './component/Admin';
import History from './component/History';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cloth' element={<Clothbag />} />
        <Route path='/travel' element={<TravelBags />} />
        <Route path='/summer' element={<SummerSale />} />
        <Route path='/uploadFile' element={<UploadLile />} />
        <Route path='/shopping' element={<ShoppingCart />} />
        <Route path='/checkout' element = {<Checkout/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
      {/* <UploadLile/> */}
      {/* <Admin/> */}
     
    </div>

  );
}

export default App;
