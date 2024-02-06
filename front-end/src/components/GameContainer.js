import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { width } from '@mui/system';
import AliceCarousel from 'react-alice-carousel';
import { FaChevronCircleDown } from 'react-icons/fa';
import g1 from './game1.png';
import g2 from './game2.png';
import {Carousel} from "react-responsive-carousel";


function GameContainer() {
 

  return (
    <Box id="Games" sx={{
      backgroundColor: "#000000",
      height: '100%',
      pt: 8,
      pb: {xs:2, sm:3}
    }}>
     
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{padding: {xs:'0px 5vw',sm:'0px 7vw',lg:'0px 10vw'},  }}
      >
        <Grid xs={12} md={6}>
            <img src={g1} style={{ width: '100%', height: '100%', borderRadius: "25px" }} />
        </Grid>
        <Grid xs={12} md={6} >
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{padding: {xs:'30px 0px', sm: '60px 0px'} }}
        >
            <Grid item={'auto'}>
          <Typography sx={{ color: '#FEDB24', fontSize: {xs:'23px', md: '25px'},fontFamily: 'Orbitron',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.11em',
            textTransform: 'uppercase'
          }}>
          Miniverse
          </Typography>
            </Grid>
            <Grid item={'auto'}>
          <Typography sx={{ color: '#FFF', fontSize: {xs:'14px', sm: '17px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
                mt: {xs:'30px', sm: '50px'},
                padding: '0px 5vw', textAlign: 'center', maxWidth: '365px'
          }}>
          Jump into your own exclusive miniverse. Welcoming all members to connect and contribute towards the growth of their community.
          </Typography>
            </Grid>
            <Grid item={'auto'} sx={{ marginTop: {xs:'40px',md:'60px' }}}>
            <Button
            sx={{
              color: '#F9D649', fontSize: { xs: '17px', md: '19px' }, textAlign: 'center', fontFamily: 'Orbitron',
              height: '45px',
              background:' #000000',
              borderRadius: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: "2.28px solid #FFD700",
              padding: '11px 26px',
              boxShadow: '0px 7px 6px 0px #FFFFFF33',
              ':hover': {
                //filter: 'drop-shadow(0px 0px 20px #F9D649)',
                boxShadow: '0px 0px 25px #FFD700'
              },
              '.MuiTouchRipple-root span': {
                backgroundColor: '#FFD700',
                color: '#000',
              }
              
            }}
          >
         LEARN MORE
          </Button>
        </Grid>
          </Grid> 
        </Grid>
        <Grid xs={12} md={6} sx={{display:{xs: 'inherit' ,md: 'none'}}} >
          <img src={g2} style={{width: '100%', height: '100%', borderRadius: "25px"}} />
        </Grid>
        <Grid xs={12} sx={{ height:{xs:"20px", md: '40px'}}}></Grid>
        <Grid xs={12} md={6}>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{padding: {xs:'30px 0px', md:'60px 0px'}}}
          >
            <Grid item={'auto'}>
            <Typography sx={{ color: '#FEDB24', fontSize: {xs:'23px', md: '25px'},fontFamily: 'Orbitron',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.11em',
            textTransform: 'uppercase'
          }}>
          GAMES
          </Typography>
            </Grid>
            <Grid item={'auto'}>
          <Typography sx={{ color: '#FFF', fontSize: {xs:'14px', sm: '17px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
                mt: {xs:'30px', sm: '50px'},
                padding: '0px 5vw', textAlign: 'center', maxWidth: '365px'
          }}>
          The stakes are high and the rewards are big! Four categories of games to choose from, each with its unique thrilling experience. Jump into glass bridge for a chance at the first $5000 grand jackpot.
          </Typography>
            </Grid>
            
            <Grid item={'auto'} sx={{marginTop: '40px'}}>
            <Button
            sx={{
              color: '#F9D649', fontSize: { xs: '17px', md: '19px' }, textAlign: 'center', fontFamily: 'Orbitron',
              height: '45px',
              background:' #000000',
              borderRadius: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: "2.28px solid #FFD700",
              padding: '11px 26px',
              boxShadow: '0px 7px 6px 0px #FFFFFF33',
              ':hover': {
                //filter: 'drop-shadow(0px 0px 20px #F9D649)',
                boxShadow: '0px 0px 25px #FFD700'
              },
              '.MuiTouchRipple-root span': {
                backgroundColor: '#FFD700',
                color: '#000',
              }
              
            }}
          >
         LEARN MORE
          </Button>
        </Grid>
              
          </Grid> 
        </Grid>
        <Grid xs={12} md={6} sx={{display:{xs: 'none' ,md: 'inherit'}}} >
          <img src={g2} style={{width: '100%', height: '100%', borderRadius: "25px" }} />
        </Grid>
      </Grid>
      </Box>
  );
}

export default GameContainer;
