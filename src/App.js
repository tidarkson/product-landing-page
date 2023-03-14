import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FetchProducts from "./components/FetchProducts";
import Error from "./components/Error";
import SingleProduct from './components/SingleProduct';
import ScrollToTop from './components/ScrollToTop';
import {useState} from 'react'
import Header from './components/Header';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
        <ScrollToTop/>
        <Header setIsOpen={setIsOpen}/>
      <Routes>
        <Route path='/' element={<FetchProducts isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
        <Route path='/:name' element={<SingleProduct isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
