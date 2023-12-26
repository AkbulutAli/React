import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Homepage from './pages/HomePage/Homepage';
import Navbar from './components/Navbar/Navbar';
import ProductDetails from './components/ProductCard/ProductDetails';
import AddProduct from './components/AddProduct/AddProduct';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/product-detail/:id' element={<ProductDetails />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/add-product' element={<AddProduct />}></Route>
        <Route path='*' element={<p> Not Found </p>}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;