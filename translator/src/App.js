import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
// import About from './Components/About';
// import Footer from './Components/Footer';
// import Remark from './Components/Remark';
// import Faq from './Components/Faq';
// import Description from './Components/Description';
// import Test from './Components/Remark';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import Home from './Home';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path="/main" element={<Main/>}/>
        </Routes>
     </BrowserRouter>

      
      
    </div>
  );
}

export default App;
