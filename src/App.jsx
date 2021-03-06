import {Route, Navigate , Routes} from 'react-router-dom';


import Header from './componets/Header.jsx';
import Main from './componets/Main.jsx';
import Footer from './componets/Footer.jsx';
import ForUs from './componets/ForUs'  
import Clients from './componets/Clients.jsx';
import ShopTest from './componets/ShopTest';
import Navigation from './componets/Navigation';  
import Shop from './componets/Shop'
import NotFound404 from './componets/NotFound404'
import ScrollToTop from './componets/ScrollToTop.jsx';
import Tips from './componets/Tips.jsx';
import Confidential from './componets/Confidential.jsx';

function App() {
  return (
      <div className="">
          <Navigation/>
            <ScrollToTop>
              <Routes>
                  
                  <Route exact path="/forus" element={<ForUs/>} />
                  <Route path="/clients" element={<Clients/>} />
                  <Route path="/location" element={<ShopTest/>} />
                  <Route path="/shop" element={<Shop/>}/>
                  <Route path="/tips" element={<Tips/>}/>
                  <Route path="/confidential" element={<Confidential/>}/>
                  <Route path="/"element={<Main/>}/>
                  <Route path="*"element={<NotFound404/>}/>
                  
                </Routes>
              </ScrollToTop>
          <Footer/>
      </div>

  );
}

export default App;
