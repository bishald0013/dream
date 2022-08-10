
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LogIn from './components/LogIn';
import SigneUp from './components/SigneUp';
import { UserAuthContextProvider } from './UserAuthContext';
import AllProduct from './ProductsLists/Product/AllProduct';
import Cart from './ProductsLists/Cart';
import Dream from './ProductsLists/Product/Dream';
import AllRing from './ProductsLists/Product/AllRing';
import CheckOut from './ProductsLists/checkout/CheckOut';
import Blog from './components/fontpages/Blog/Blog';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserAuthContextProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login' element={<LogIn />} />
              <Route path='signeup' element={<SigneUp />} />
              <Route path='allproduct' element={<AllProduct />} />
              <Route path='cart' element={<Cart />} />
              <Route path='dream' element={<Dream />} />
              <Route path='allring' element={<AllRing />} />
              <Route path='checkout' element={<CheckOut />} />
              <Route path='blog' element={<Blog />} />
            </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
