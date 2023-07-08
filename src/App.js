import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Products from './Products';
import ProductDetails from './ProductDetails';
import  AddProductForm from './AddProductForm'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
         <Route path='/Login' element={<Login/>} />
         <Route path="/" element={<Navigate to="/login" />}/>
         <Route path='/Products' element={<Products/>} />
         <Route path='/ProductDetails/:productId' element={<ProductDetails />} />
         <Route path='/ AddProductForm' element={< AddProductForm/>} />
         
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;





