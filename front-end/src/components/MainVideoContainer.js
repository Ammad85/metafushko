import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import {MetaBlackBtn} from './comp';
import ReactPlayer from 'react-player'
import { MetaPageHeaderText } from "./comp";


function MainVideoContainer() {
  return (
    <Box id="About" sx={{
        backgroundColor: "#000000",
    }} >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{padding: '65px 0px 75px'}}
      >
        <Grid item={12}>
          <MetaPageHeaderText text="MetaFushko" />
          {/* <Typography sx={{ color: '#F9D649', fontSize: {xs: '30px', md: '32px'},fontFamily: 'Orbitron', 
            fontWeight: 'bolder',
            letterSpacing: '0.115em',
            textTransform: 'uppercase',
          }}>
          MetaFushko
          </Typography> */}
        </Grid>
        <Grid item={12}>
          <Typography component={'p'} sx={{
          color: '#FFFFFF', fontSize: "14px",fontFamily: 'Inter', 
          fontWeight: 'bold',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginTop: '10px',
          }}>
          Enter Player One
          </Typography>
        </Grid>
        
        <Grid >
          <Box sx={{ width: { xs: '75vw', md: '60vw' }, height: { xs: '100%', md: '100%' }, marginTop: '45px', borderRadius: '50px !important' }}>
          <div>
          <div className='player-wrapper'>
          <ReactPlayer
                  //url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
                  url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
          </div>
          </div>
        </Box>
        </Grid>
        <Grid item={12}>
          <Typography component={'p'} sx={{ color: '#FFF', fontSize: {xs: '18px', md: '23px'}, marginTop: {xs:'30px',md:'50px'}, fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '27px',
            textAlign: 'center',
            width:{xs: '75vw', md: '60vw'}
          }}>
          Bringing out of this world experiences to thrill seekers. The Meta Fushko Arena bends the laws of reality in an all encompassing immersive gaming experience.
          </Typography>
        </Grid>
        <Grid>
          <metaBlackBtn />
        </Grid>
        <Grid item={'auto'} sx={{ marginTop: '50px' }}>
          <MetaBlackBtn text='EXPLORE METAVERSE' />
          {/* <Button
            sx={{
              color: '#F9D649', fontSize: {xs: '16px' ,md:'19px'}, textAlign: 'center', fontFamily: 'Orbitron',
              height: '45px',
              background:' #000000',
              borderRadius: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: "2.28px solid #FFD700",
              padding: {xs: '11px 20px',md:'11px 26px'},
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
          EXPLORE METAVERSE
          </Button> */}
        </Grid>
        </Grid>
      </Box>
  );
}

export default MainVideoContainer;
