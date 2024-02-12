import HomeRender from "./components/home/HomeRender";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DataProvider from "./context/DataProvider";
import DetailView from './components/details/DetailView';

function App() {
  return (
   
    <BrowserRouter>
    <DataProvider>
      <Routes>
        <Route path="/" element={<HomeRender/>} />
        <Route path='/product/:id' element={<DetailView/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      </DataProvider>
    </BrowserRouter>
   
  );
}

export default App;
