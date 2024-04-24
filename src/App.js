
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from './components/Success';


function App() {


  return (
    <BrowserRouter>
    <div className='container'>
        <Routes>
          <Route path="/UserLogin-Insti_webops" element={<Login/>}/>
          <Route path="/UserLogin-Insti_webops/signup" element={<Signup/>}/>
          <Route path="/UserLogin-Insti_webops/success" element={<Success/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
