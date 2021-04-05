import { Outlet } from 'react-router';
import '../App.css';


function Product() {
  return (
    <div>
      <h5>Our Top Featured Products</h5>
      <Outlet></Outlet>
    </div>
  );
}

export default Product;