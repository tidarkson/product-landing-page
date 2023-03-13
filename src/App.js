import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FetchProducts from "./components/FetchProducts";
import Error from "./components/Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FetchProducts/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
