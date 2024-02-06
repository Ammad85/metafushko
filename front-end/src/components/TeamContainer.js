import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import team1 from './team1.png';
import team2 from './team2.png';
import team3 from './team3.png';
import team4 from './team4.png';
import team5 from './team5.png';
import team6 from './team6.png';
import insta_mini from './insta_mini.png';
import twitter_mini from './twitter_mini.png';
import { MetaPageHeaderText } from './comp';

function MainVideoContainer() {

  const team = [
    {
      image: team1,
      name: "NAME SURNAME",
      des: "JOB TITLE"
    },
    {
      image: team2,
      name: "NAME SURNAME",
      des: "JOB TITLE"
    },
    {
      image: team3,
      name: "NAME SURNAME",
      des: "JOB TITLE"
    },
    {
      image: team4,
      name: "NAME SURNAME",
      des: "JOB TITLE"
    },
    {
      image: team5,
      name: "NAME SURNAME",
      des: "JOB TITLE"
    },
    {
      image: team6,
      name: "NAME SURNAME",
      des: "JOB TITLE"
    },
  ]

  return (
    <Box id="Team" sx={{
      backgroundColor: "#000000",
      paddingTop: 20
    }} >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{padding: '0px 0px 16px'}}
      >
        <Grid item={'auto'}>
        <MetaPageHeaderText text="Our Team" />
        </Grid>
      </Grid>
      
      <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        sx={{padding:{xs:'20px 10vw',sm:'50px 15vw',md:'60px 20vw'}}}
        
      >
        {team.map((item) => 
          <Grid xs={"auto"} margin="22px 0px">
          <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              sx={{
                width: "100%",
                height: "100%",
                padding: '32px 32px',
                width: '266.93px',
                height: '272.81px',
                backgroundImage: `url(${item.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}    
            >
            <Grid xs={'auto'} sx={{cursor: "pointer"}}>
                <img src={twitter_mini} />
              
            </Grid>
            <Grid xs={'auto'} marginLeft="10px" sx={{cursor: "pointer"}}>
            <img src={insta_mini} />
            </Grid>
            </Grid>
            <Grid xs={12}>
              <Typography sx={{
                  color: '#FEDB24', fontSize: { xs: '20px', md: '21px', lg: "22px" }, fontFamily: 'Orbitron',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  letterSpacing: '0.11em',
                textTransform: 'uppercase',
                textAlign: "left",
                paddingLeft: '10px'
              }}>
                {item.name}
            </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography
                sx={{
                  color: '#FFFFFF', fontSize: { xs: '14px', md: '16px', lg: "17px" }, fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  textAlign: "left",
                  paddingLeft: '10px'
              }}
              >
                {item.des}
            </Typography>
            </Grid>  
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default MainVideoContainer;
