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



function App() {
  return (
    <>
        <MainCarousel />
        <MainVideoContainer />
        <ComContainer />
        <GameContainer />
        <MarketContainer />
        <ProgressbarContainer />
    </>
  );
}

export default App;
