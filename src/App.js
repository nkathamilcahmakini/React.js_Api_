import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Products from './Products';

function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Routes>
        <Route path='/Login' element ={ <Login/>} />
        <Route path='/Products' element ={ <Products/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
