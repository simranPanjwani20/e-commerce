import './App.css';
import Shirts from './Pages/Shirts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './Pages/Details';
import { BagProvider } from './Context/shoppingBag';
import PropertyList from '../src/Pages/propertyList'; 
import PropertyDetail from '../src/Pages/PropertDetail'; 
import AllCars from '../src/Pages/allCars';
import Home from './Pages/home';

function App() {
  return (
   <>  
   <BagProvider>
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/clothes" element={<Shirts/>}/>
        <Route exact path="/:productId"  element={<Details/>}  />
        <Route exact path="/property" element={<PropertyList/>}/>
    <Route exact path="/property/:id"  element={<PropertyDetail/>}  />
    <Route exact path="/car" element={<AllCars/>}/>
    <Route exact path="/page/:page"  element={<AllCars/>}  />
      </Routes>
        </Router>
        </BagProvider>
   </>
  );
}

export default App;
