import {Route, Routes} from 'react-router-dom';


import Header from './componets/Header.jsx';
import Main from './componets/Main.jsx';
import Footer from './componets/Footer.jsx';
import ForUs from './componets/ForUs'  
import Clients from './componets/Clients.jsx';
import ShopLocation from './componets/ShopLocation'

function App() {
  return (
      <div className="">
          <Header/>
            <Routes>
                <Route exact path="/forus" element={<ForUs/>} />
                <Route path="/clients" element={<Clients/>} />
                <Route path="/location" element={<ShopLocation/>} />
                <Route path="/"element={<Main/>}/>
                
                
              </Routes>
          <Footer/>
      </div>

  );
}

export default App;
