import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
