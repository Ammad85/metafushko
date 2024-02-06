import { Box, Button, ButtonGroup, Grid, TextField, Typography } from '@mui/material';
import part1 from './part1.png';
import part2 from './part2.png';
import part3 from './part3.png';
import part4 from './part4.png';
import part6 from './part6.png';
import part5 from './part5.png';




function ContactusContainer() {
  return (
    <>
    <Box sx={{
      backgroundColor: "#000000",
      height: '100%',
      padding: {xs:'10vw' ,md:'100px'}
    }}>
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{mt: 2, padding: '0px',mb: {xs:10,md:30}}}
      >
        <Grid xs={12} >
        <Typography sx={{ color: '#F9D649', fontSize: {xs:'24px' ,md:'30px'},fontFamily: 'Orbitron',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.11em',
              textTransform: 'uppercase',
          }}>
         Development Timeline
          </Typography>
        </Grid>
        <Grid xs={12} >
        <Typography sx={{ color: '#FFFFFF', fontSize: '16',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.7em',
              textTransform: 'uppercase',
              marginTop: '10px',
          }}>
          Lorem Ipsum dolor sit amet
            </Typography>
          </Grid>
          </Grid>
      

          <Grid container
          direction="row"
          justifyContent="left"
          alignItems="center"
          sx={{padding: {xs: "0px 20vw",sm:'0px 30vw'}, mb: 5 , display:{md: 'none'}}}
          >
          <div style={{height: '80vh', width: '54px',
          backgroundColor: '#2D2D2D',
          borderRadius: '60px'}}>
          <div style={{height: '80vh', width: '54px',
          background: 'linear-gradient(360deg, #F9D649 -30.87%, #915700 100%)',
              borderRadius: '60px 60px 0px 0px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: "100% 40%"
          }}>
            <Grid container
            direction="column"
              alignItems="center"
                justifyContent="space-between"
                padding={"10vh 0px"}
            >
              <Grid xs={12} marginLeft="26px">
              <Grid container
                  direction="row"
                  justifyContent="center"
                    alignItems="center"
                   
                >
                  <div style={{ display: 'flex', }}>
                  
                  <div style={{width:'84px', height: '0px', border: '1.5px solid #F9D649', borderRadius: '15px' }}>
                  </div>
                
                  <span style={{padding: '10px', marginTop: "-20%"}}>
                  <Typography component={'span'} sx={{ color: '#FFFFFF', fontSize: '9px',fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    textAlign: 'center',
                  }}>
                  LOREM</Typography>
                          <Typography sx={{ color: '#FFFFFF', fontSize: '12px',fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    textAlign: 'center',
                        }}>
                          

                  PUBLIC<br/>GAME LAUNCH</Typography>
                  </span>
                  </div>
                  </Grid>
              </Grid>

              <Grid xs={12} marginLeft="65px">
              <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <div style={{ display: 'flex', marginTop: '10vh'  }}>
                  
                  <div style={{width:'84px', height: '0px', border: '1.5px solid #F9D649', borderRadius: '15px' }}>

                  
                  </div>
                
                  <span style={{padding: '10px', marginTop: "-20%"}}>
                  <Typography component={'span'} sx={{ color: '#FFFFFF', fontSize: '9px',fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    textAlign: 'center',
                  }}>
                  LOREM</Typography>
                          <Typography sx={{ color: '#FFFFFF', fontSize: '12px',fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    textAlign: 'center',
                  }}>
                  Beta Game <br /> launch community <br /> building</Typography>
                  </span>
                  </div>
                  </Grid>
              </Grid>

              <Grid xs={12} marginLeft="90px">
              <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <div style={{ display: 'flex', marginTop: '10vh'  }}>
                  
                  <div style={{width:'62px', height: '0px', border: '1.5px solid #F9D649', borderRadius: '15px' }}>

                  
                  </div>
                
                  <span style={{padding: '10px', marginTop: "-20%"}}>
                  <Typography component={'span'} sx={{ color: '#404040', fontSize: '9px',fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    textAlign: 'center',
                  }}>
                  LOREM</Typography>
                          <Typography sx={{ color: '#404040', fontSize: '12px',fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    textAlign: 'center',
                  }}>
                  Partnerships <br /> collaborations</Typography>
                  </span>
                  </div>
                  </Grid>
              </Grid>

              <Grid xs={12} marginLeft="28px">
              <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <div style={{ display: 'flex', marginTop: '10vh'  }}>
                  
                  <div style={{width:'62px', height: '0px', border: '1.5px solid #F9D649', borderRadius: '15px' }}>

                  
                  </div>
                
                  <span style={{padding: '10px', marginTop: "-20%" ,marginLeft:"30px"}} >
                  <Typography component={'span'} sx={{ color: '#404040', fontSize: '9px',fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    textAlign: 'center',
                  }}>
                  LOREM</Typography>
                          <Typography sx={{ color: '#404040', fontSize: '12px',fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    textAlign: 'center',
                  }}>
                  LOREMI<br/>PSUM</Typography>
                  </span>
                  </div>
                  </Grid>
              </Grid>



            </Grid>
          </div>
        </div>
        </Grid>
      

          <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{mt: 25, padding: '0px', mb: 15, display:{xs:"none", md: 'inherit'}}}
          >
        <div style={{height: '54px', width: '80vw',
          background: '#2D2D2D',
          borderRadius: '60px'}}>
          <Box sx={{height: '54px', width: '80vw',
            background: 'linear-gradient(270deg, #F9D649 -30.87%, #915700 100%)',
              borderRadius: '60px 0px 0px 60px',
              backgroundSize: {md:"37.7%" ,lg:'39.5%'},
              backgroundRepeat: 'no-repeat',
          }}>
              <Grid container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding:{md: "0px 5vw", lg: "0px 10vw"} }}
            >
              <Grid xs={'auto'} marginTop="-93px">
              <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <span style={{padding: '10px'}}>
                  <Typography sx={{ color: '#FFFFFF', fontSize: '9px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            letterSpacing: '0.3em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          LOREM</Typography>
                  <Typography sx={{ color: '#FFFFFF', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.18em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          Public <br/>
GAME LAUNCH</Typography>
                  </span>

              
              <div style={{width:'0px', height: '84px', border: '1.5px solid #F9D649', borderRadius: '15px' }}>

    
                    </div>
                    <span style={{padding: '10px'}}>
                  <Typography sx={{ color: '#000', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.18em',
              textTransform: 'uppercase',
                        textAlign: 'center',
            display: "hidden"
          }}>
          COMMUNITY<br/>
          BUILDING
          </Typography>
                  </span>
                  </Grid>
              </Grid>


              <Grid xs={'auto'} marginTop="-93px">
              <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <span style={{padding: '10px'}}>
                  <Typography sx={{ color: '#FFFFFF', fontSize: '9px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            letterSpacing: '0.3em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          LOREM</Typography>
                  <Typography sx={{ color: '#FFFFFF', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.18em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          Beta<br/>Game launch
          </Typography>
                  </span>

              <div style={{width:'0px', height: '84px', border: '1.5px solid #F9D649', borderRadius: '15px' }}>

              </div>
                    <span style={{padding: '10px'}}>
                  <Typography sx={{ color: '#FFFFFF', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.18em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          COMMUNITY<br/>
          BUILDING
          </Typography>
                  </span>
                  </Grid>
              </Grid>

              <Grid xs={'auto'} marginTop="-93px">
              <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <span style={{padding: '10px'}}>
                  <Typography sx={{ color: '#404040', fontSize: '9px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            letterSpacing: '0.3em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          LOREM</Typography>
                  <Typography sx={{ color: '#404040', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.18em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          PARTNERSHIPS<br/> <span style={{color:"#000"}}>BUILDING</span></Typography>
                  </span>

              <div style={{width:'0px', height: '84px', border: '1.5px solid #F9D649', borderRadius: '15px' }}>

                    </div>
                    <span style={{padding: '10px'}}>
                  <Typography sx={{ color: '#404040', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.18em',
              textTransform: 'uppercase',
                        textAlign: 'center',
            display: "hidden"
          }}>
          COLLABORATIONS<br/>
          <span style={{color:"#000"}}>BUILDING</span>
          </Typography>
                  </span>
                  </Grid>
              </Grid>

              <Grid xs={'auto'} marginTop="-93px">
              <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <span style={{padding: '10px'}}>
                  <Typography sx={{ color: '#404040', fontSize: '9px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            letterSpacing: '0.3em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          LOREM</Typography>
                  <Typography sx={{ color: '#404040', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.18em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          LOREMI<br/>PSUM</Typography>
                  </span>

              <div style={{width:'0px', height: '84px', border: '1.5px solid #F9D649', borderRadius: '15px' }}>

                    </div>
                    <span style={{padding: '10px'}}>
                  <Typography sx={{ color: '#000', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.18em',
              textTransform: 'uppercase',
                        textAlign: 'center',
            display: "hidden"
          }}>
          COMMUNITY<br/>
          BUILDING
          </Typography>
                  </span>
                  </Grid>
              </Grid>

            </Grid>
          </Box>
        </div>
        </Grid>
    </Box>
    <Grid
    container
    direction="row"
    justifyContent="space-around"
    alignItems="center"
        sx={{ padding: '37px 8vw 90px', background: 'linear-gradient(270deg, #F9D649 -30.87%, #915700 100%)' }}
        rowGap={6}
  >
        <Grid xs={12}>
        <Typography sx={{ color: '#000000', fontSize: '30px',fontFamily: 'Orbitron',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.5em',
              textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          PARTNERS</Typography>
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={"auto"}>
        <img src={part6} />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={"auto"}>
        <img src={part3} />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={"auto"}>
        <img src={part5} />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={"auto"}>
        <img src={part2} /> 
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={"auto"}>
        <img src={part4} />
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={"auto"}>
          <img src={part1} />
          </Grid>
  </Grid>
    </>
  );
}



export default ContactusContainer;
