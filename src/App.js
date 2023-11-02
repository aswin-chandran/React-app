
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Table from './components/Table';




function App() {
  return (
    <>

<Navbar/>

<Routes>
{/* <Route path="/" element={<Table/>}></Route> */}
<Route path="/Signup" element={<Signup/>}></Route>


<Route path="/Login" element={<Login/>}></Route>

</Routes>


    </>
  );
}

export default App;
