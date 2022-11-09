
import './App.css';

import Home from './pages/Home';
import MovieDetail from './components/MovieDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
 
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/MovieDetail/:id"  element={<MovieDetail/>}/>
        </Routes>
      </BrowserRouter>
      

  );
}

export default App;
