import { Provider } from 'react-redux';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import store from './store/store';


function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      
      
      <Routes>
        <Route path='/' exact element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
