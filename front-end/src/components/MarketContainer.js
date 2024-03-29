import { Avatar, Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { width } from '@mui/system';
import { FaChevronCircleDown } from 'react-icons/fa';
import m1 from './m1.png';
import m2 from './m2.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import makeStyles  from '@emotion/styled';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: 'pink',
    color: 'black'
  }
}));

function MarketContainer() {

  const [open, setOpen] = useState(true);
 
  let iconStyles = { fontSize: "40px", color:'#FFFFFF', margin: 0, backgroundColor: '#ffffff', borderRadius:'50px', marginTop: '-20px', cursor: 'pointer'};
  return (
    <Box id="Marketplace" sx={{
      backgroundColor: "#000000",
      height: '100%',
    }}>
     {/* <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar style={iconStyles} onClick={() => setOpen(!open)}>
        {open ? <ExpandMoreIcon htmlColor='black' fontSize='x-large' fontWeight="700" />:
          <ExpandLessIcon htmlColor='black' fontSize='x-large' fontWeight="700" />}
        </Avatar>
      </Grid> */}
      {open &&
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: {xs:'0px 5vw',sm:'0px 7vw',lg:'0px 10vw'}}}
      >
        <Grid xs={12} md={6} sx={{padding: {xs:'0px 3vw'}}} >
          <img src={m1} style={{width: '100%', height: '100%'}} />
        </Grid>
        <Grid xs={12} md={6} sx={{padding: {xs:'0px 3vw'}}}>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
          sx={{padding: {xs:'40px 0px', sm: '60px 0px'} }}
        >
            <Grid item={'auto'}>
            <Typography sx={{ color: '#FEDB24', fontSize: {xs:'23px', md: '25px'},fontFamily: 'Orbitron',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.11em',
            textTransform: 'uppercase'
          }}>
          Marketplace
          </Typography>
            </Grid>
            <Grid item={'auto'}>
            <Typography sx={{ color: '#FFF', fontSize: {xs:'14px', sm: '17px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
                mt: {xs:'30px', sm: '50px'},
                padding: '0px 5vw', textAlign: 'center', maxWidth: '365px'
          }}>
          Discover Collections, get upgrades or browse for special edition collectibles created by the leading artists of our time.
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
        <Grid xs={12} md={6}  sx={{display:{xs: 'inherit' ,md: 'none', padding: {xs:'0px 3vw'}}}} >
          <img src={m2} style={{width: '100%', height: '100%'}} />
        </Grid>
        <Grid xs={12} sx={{ height:{xs:"20px", md: '40px'}}}></Grid>
        <Grid xs={12} md={6} sx={{padding: {xs:'0px 3vw'}}}>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{padding: '60px 0px'}}
        >
            <Grid item={'auto'}>
            <Typography sx={{ color: '#FEDB24', fontSize: {xs:'23px', md: '25px'},fontFamily: 'Orbitron',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.11em',
            textTransform: 'uppercase'
          }}>
          Ecosystem
          </Typography>
            </Grid>
            <Grid item={'auto'}>
            <Typography sx={{ color: '#FFF', fontSize: {xs:'14px', sm: '17px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
                mt: {xs:'30px', sm: '50px'},
                padding: '0px 5vw', textAlign: 'center', maxWidth: '365px'
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper accumsan porttitor. Curabitur semper enim vel dignissim congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper accumsan porttitor. Curabitur semper enim vel dignissim congue. 

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
        <Grid xs={12} md={6} sx={{ display: { xs: 'none', md: 'inherit' }, padding: {xs:'0px 3vw'}}} >
          <img src={m2} style={{width: '100%', height: '100%'}} />
        </Grid>
      </Grid>
}
      </Box>
  );
}

export default MarketContainer;
