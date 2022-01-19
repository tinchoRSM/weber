import {Route, Navigate , Routes} from 'react-router-dom';


import Header from './componets/Header.jsx';
import Main from './componets/Main.jsx';
import Footer from './componets/Footer.jsx';
import ForUs from './componets/ForUs'  
import Clients from './componets/Clients.jsx';
import ShopTest from './componets/ShopTest';
import Navigation from './componets/Navigation';  
import Shop from './componets/Shop'

function App() {
  return (
      <div className="">
          <Navigation/>
            <Routes>
              
                <Route exact path="/forus" element={<ForUs/>} />
                <Route path="/clients" element={<Clients/>} />
                <Route path="/location" element={<ShopTest/>} />
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/"element={<Main/>}/>
                
              </Routes>
          <Footer/>
      </div>

  );
}

export default App;
