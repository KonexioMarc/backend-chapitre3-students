import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
