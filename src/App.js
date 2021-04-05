import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import NotFound from './Components/NotFound';
import Product from './Components/Product';
import ProdDetails from './Components/ProductDetails';
import ProdHome from './Components/ProductHome';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='products' element={<Product/>}>
          <Route path=':productID' element={<ProdDetails/>}></Route>
          <Route path='/' element={<ProdHome/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

const AppWraper = () => {
  return (
    <Router>
      <App></App>
    </Router>
  )
}


export default AppWraper;
