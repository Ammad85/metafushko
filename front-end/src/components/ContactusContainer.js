import { Box, Button, ButtonGroup, Grid, InputBase, TextField, Typography, withStyles } from '@mui/material';
import { width } from '@mui/system';
import { FaChevronCircleDown } from 'react-icons/fa';
import m1 from './m1.png';
import m2 from './m2.png';
import makeStyles from '@emotion/styled';
import twitter from './twitter 1.png';
import discord from './discord 1.png';
import instagram from './instagram 1.png';
import email from './email 1.png';
import logo from './footer_logo.png';
import { MetaBlackBtn } from './comp';



const useStyles = makeStyles({
  input: {
    color: '#F9D649',
    fontSize: '24px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: '0.5em',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
});

// const BootstrapInput = withStyles((theme) =>
//   createStyles({
//     input: {
//       borderRadius: 6,
//       border: '1px solid #FFF',
//       backgroundColor: "transparent",
//       color: 'red',
//       fontSize: 16,
//       padding: '10px 12px',
//       '&:focus': {
//         borderColor: 'none',
//       },
//     },
//   }),
// )(InputBase);

function ContactusContainer() {
  const classes = useStyles();
  
  let iconStyles = { fontSize: "40px", color:'#FFFFFF', margin: 0, backgroundColor: 'black', borderRadius:'50px', marginTop: '-20px'};
  return (
    <Box sx={{
      backgroundColor: "#000000",
      height: '100%',
      paddingTop: 7
    }}>
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: '0px'}}
      >
        <Grid xs={'12'} >
        <Typography sx={{ color: '#F9D649', fontSize: {xs:'23px',md:'25px'},fontFamily: 'Orbitron',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing:'0.11em',
            textTransform: 'uppercase'
          }}>
         Join the fushkonation
          </Typography>
        </Grid>
        <Grid xs={'12'} >
        <Typography sx={{ color: '#FFFFFF', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
              fontWeight: 400,
              mt: { xs: 2, md: 2 },
          }}>
        Keep up to date with the latest releases and be the first to get exclusive offers
          </Typography>
        </Grid>
        <Grid xs={12}>
        <Box sx={{
                background: '#2D2D2D',
            borderRadius: '60px', display: 'flex',
            // paddingLeft: {xs:'10px', md: '20px'},
            width: { xs: "100%", sm: "480px" },
                marginTop: "35px"
              }}>
                <input
                  placeholder='Enter your email'
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: '60px',
                    border: '#2D2D2D',
                  color: '#9B9B9B',
                    fontWeight: 700,
                    flex: 1,
                  fontSize: '14px',
                  height: '37px',
                    margin: "auto 10px",
                    "&:focus": {
                      outline: 'none'
                  }
                  
              }} />
            <MetaBlackBtn text='SUBSCRIBE' xsmall={true} />
            </Box>
             </Grid>
        <Grid xs={12} md={'auto'}>
        
              </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
          alignItems="center"
          sx={{mt: {xs:4 ,md:8},mb: {xs:5 ,md:5}}}
        >
          <Grid xs={2} md={1}>
            <img src={email} />
            </Grid>
            <Grid xs={2} md={1}>
          <img src={twitter} />
          </Grid>
          <Grid xs={2} md={1}>
        <img src={instagram} />
        </Grid>
        <Grid xs={2} md={1}>
      <img src={discord} />
      </Grid>
        </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
          alignItems="center"
        >
          <MetaBlackBtn text='Get in touch' />
        </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
          alignItems="center"
          sx={{mt: {xs:3 ,md:4},mb: 5, padding:'0px 10vw'}}
        >
          <Typography sx={{ color: '#FFFFFF', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
              fontWeight: 700,
          }}>
        Get Assistance with product, account or payment related issues. Our support team will try to help you.
          </Typography>
        </Grid>
       
        
        <Grid
        container
        direction="row"
        justifyContent="center"
          alignItems="center"
          sx={{mt: {xs:3 ,md:3},mb: {xs:4 ,md:5}}}
        >
          <img src={logo}
            style={{cursor: 'pointer'}}
            onClick={() => {
            window.location.href = "/";
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}  />
        </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
          alignItems="center"
          sx={{mb: {xs:4 ,md:5}, padding:{xs:'0px 10vw',md:'0px 20vw'}}}
        >
          <Typography sx={{ color: '#FFFFFF', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
              fontWeight: 700,lineHeight: "28px"
          }}>
        MetaFushko® are registered trademarks of MetaFushko Corporation. All rights reserved. All other copyrights and trademarks are the property of their respective owners.
          </Typography>
        </Grid>
        </Grid>
      
      </Box>
  );
}



export default ContactusContainer;
