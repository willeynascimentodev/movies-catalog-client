import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='contain-all'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home perPage={10}/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
