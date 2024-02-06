import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navbar';
import MainCarousel from './components/MainCarousel';
import MainVideoContainer from './components/MainVideoContainer';
import { Box } from '@mui/material';
import ComContainer from './components/ComContainer';
import GameContainer from './components/GameContainer';
import MarketContainer from './components/MarketContainer';
import ContactusContainer from './components/ContactusContainer';
import ProgressbarContainer from './components/ProgressbarContainer';
import TeamContainer from './components/TeamContainer';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Support from './components/Support';
import WebFont from 'webfontloader';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter', 'Orbitron']
      }
    });
   }, []);
  return (
    <div className="App">
      <Box sx={{ width: '100%', margin: 0 }} >
      <Router>
        <ResponsiveAppBar />
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/team' element={< TeamContainer />}></Route>
            <Route exact path='/support' element={< Support />}></Route>
        </Routes>
          <ContactusContainer />
      </Router>
      </Box>

    </div>
  );
}

export default App;
