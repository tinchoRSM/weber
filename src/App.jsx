import {Route, Routes} from 'react-router-dom';


import Header from './componets/Header.jsx';
import Main from './componets/Main.jsx';
import Footer from './componets/Footer.jsx';
import ForUs from './componets/ForUs'  
import Clients from './componets/Clients.jsx';
import ShopLocation from './componets/ShopLocation'
import ShopTest from './componets/ShopTest'

function App() {
  return (
      <div className="">
          <Header/>
            <Routes>
              
                <Route exact path="/weber/forus" element={<ForUs/>} />
                <Route path="/weber/clients" element={<Clients/>} />
                <Route path="/weber/location" element={<ShopTest/>} />
                <Route path="/weber/"element={<Main/>}/>
                
              </Routes>
          <Footer/>
      </div>

  );
}

export default App;
