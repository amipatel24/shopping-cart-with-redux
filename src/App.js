import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/header/Header';
import {Home,Shop,Cart,Checkout,OrderData} from './pages'
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/footer/Footer'

function App() {


  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/ProductDetails/:slug' element={<ProductDetails />}></Route>
          <Route path='/Checkout' element={<Checkout />}></Route>
          <Route path='/OrderData' element={<OrderData />}></Route>

        </Routes>
        {/* <Footer /> */}
        
      </BrowserRouter>

    </div>
  );
}


export default App;
