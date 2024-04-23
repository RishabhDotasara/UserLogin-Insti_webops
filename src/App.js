import logo from './logo.svg';
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
          <Route index element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/success" element={<Success/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
