import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import{BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import{Home} from './Home';
import{Products} from './Products';
import{Basket} from './Basket';
import Footer from './Components/Footer';


function App(){
  return (
    <>
    <Router>
    <NaviBar />
    <Routes>
      <Route exact path="" element={<Home/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route exact path="/basket" element={<Basket/>} />
    </Routes>
    </Router>
    <Footer/>
    </>
  );
}
export default App;
