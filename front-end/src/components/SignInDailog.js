import { Avatar, Box, Button, ButtonGroup,Input, Dialog, DialogContent, DialogContentText, FormControl, Grid, InputLabel, TextField, Typography, Checkbox, DialogTitle } from '@mui/material';
import containerImage from './containerImage.png';
import logo_login from './logo_login.png';
import close from './close.png';
import makeStyles from '@emotion/styled';
import tick from './tick.png';
import { useState } from 'react';
import useWindowDimensions from './hook';
import { MetaBlackBtn } from './comp';

function SignInDailog({ open, setOpen, index, setIndex }) {
  const { height, width } = useWindowDimensions();
  console.log("window dimensions", height, width);
  
  const [flag, setFlag] = useState(true)
  
  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        border: '1px solid #616161',
        outline: 'none',
        "&.Mui-focused fieldset": {
          borderColor: "#616161",
          border: "none",
          outline: 'none',
          underline: 'none',
        }
      }
    }
  });

  const classes = useStyles();

  var clientHeight = document.getElementById('container')?.clientHeight;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} sx={{height: '100vh'}}
      maxWidth={"lg"} >
      
        <DialogContent sx={{backgroundColor:'#F5F5F5', padding: "0px", height: '100vh'}}   >
        <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{height: '100%'}}  
        >
          <Grid xs={12} md={'4'}  sx={{ backgroundColor: "#000000", borderBottomRightRadius: {md:"114px"}, height: {xs:"max-content", md: "100%"} }}>
            <Box
              sx={{
                backgroundImage: `url(${containerImage})`, width:"100%", height:{xs:"200px", sm:"210", md: "210"}, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
              sx={{ padding: "20px 20px", backgroundColor: "transparent", display: {xs:'flex' ,md:"none"}}}
          >
              <Grid item={"auto"}>
                <img src={close} style={{cursor: 'pointer'}} onClick={handleClose}  />
              </Grid>
            </Grid>
            </Box>
            {/* <img src={containerImage}  width="100%" height="100%" /> */}
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{margin: '70px 0px'}}
            >
              <Grid item={"auto"}>
                <Typography component={"span"}
                  sx={{
                    fontWeight: !index ? 400 : 700,
                    fontFamily: "Orbitron",
                    fontSize: '15px',
                    lineHeight: '125.2%',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: !index ? '#FFFFFF' : "#F9D649",
                    padding: "12px 10px",
                    margin: "0px 20px",
                    borderBottom: !index ? 'none' : "5px solid #F9D649",
                    cursor: "pointer",
                  }}
                  onClick={() => setIndex(1)}
                >
                  Sign up
                </Typography>
              </Grid>
              <Grid item={"auto"}>
              <Typography component={"span"}
                  sx={{
                    fontWeight: index ? 400 : 700,
                    fontFamily: "Orbitron",
                    fontSize: '15px',
                    lineHeight: '125.2%',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: index ? '#FFFFFF' : "#F9D649",
                    padding: "12px 10px",
                    margin: "0px 20px",
                    borderBottom: index ? 'none' : "5px solid #F9D649",
                    cursor: "pointer",
                  }}
                  onClick={() => setIndex(0)}
                >
                  JUMP In
                </Typography>
                </Grid>
            </Grid>
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{margin: "70px 0px 96px", display: {xs:'none' ,md:"flex"}}}
            >
              <Grid item={"auto"}>
                  <img src={logo_login} style={{ width: "100%", height: "100%" }} />
              </Grid>
              </Grid>
          </Grid>
          <Grid xs={12} md={8}>
          <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
              sx={{ padding: "30px 40px", display: {xs:'none' ,md:"flex"},}}
          >
              <Grid item={"auto"}>
                <img src={close} style={{cursor: 'pointer'}} onClick={handleClose}  />
              </Grid>
          </Grid>
            {index === 1 &&
            <>
          <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-start"
                  sx={{ padding: {xs:"0px 10vw 40px" ,md:"0px 60px 40px 70px"}, marginTop: { xs:"20px", md: 0} }}
          >
              <>
              <InputLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '13px',
                  fontStyle: 'normal',
                  letterSpacing: '0.2em',
                  textTransform: 'capitalize',
                  textAlign: "left",
                  marginBottom: '5px',
                  color: "#8F8F8F"
              }}>Name</InputLabel>
            <FormControl fullWidth>
            <input
                  id="sign-up-name"
                  name="sign-up-name"
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #616161',
                    color: '#616161',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '37px',
                    marginTop: 1,
                    padding: '0px 10px',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
            </>
            <>
              <InputLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '13px',
                  fontStyle: 'normal',
                  letterSpacing: '0.2em',
                  textTransform: 'capitalize',
                  textAlign: "left",
                  marginBottom: '5px',
                  marginTop: '10px',
                  color: "#8F8F8F"
              }}>Surname</InputLabel>
            <FormControl fullWidth>
            <input
                  id="sign-up-sur-name"
                  name="sign-up-sur-name"
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #616161',
                    color: '#616161',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '37px',
                    marginTop: 1,
                    padding: '0px 10px',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
              </>
              <>
              <InputLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '13px',
                  fontStyle: 'normal',
                  letterSpacing: '0.2em',
                  textTransform: 'capitalize',
                  textAlign: "left",
                  marginBottom: '5px',
                  marginTop: '10px',
                  color: "#8F8F8F"
              }}>Username</InputLabel>
            <FormControl fullWidth>
            <input
                  id="sign-up-user-name"
                  name="sign-up-user-name"
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #616161',
                    color: '#616161',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '37px',
                    marginTop: 1,
                    padding: '0px 10px',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
              </>
              <>
              <InputLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '13px',
                  fontStyle: 'normal',
                  letterSpacing: '0.2em',
                  textTransform: 'capitalize',
                  textAlign: "left",
                  marginBottom: '5px',
                  marginTop: '10px',
                  color: "#8F8F8F"
              }}>password</InputLabel>
            <FormControl fullWidth>
            <input
                  id="sign-up-password"
                    name="sign-up-password"
                    type={"password"}
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #616161',
                    color: '#616161',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '37px',
                    marginTop: 1,
                    padding: '0px 10px',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
              </>
              <>
              <InputLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '13px',
                  fontStyle: 'normal',
                  letterSpacing: '0.2em',
                  textTransform: 'capitalize',
                  textAlign: "left",
                  marginBottom: '5px',
                  marginTop: '10px',
                  color: "#8F8F8F"
              }}>Email(Option)</InputLabel>
            <FormControl fullWidth>
            <input
                  id="sign-up-email"
                  name="sign-up-email"
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #616161',
                    color: '#616161',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '37px',
                    marginTop: 1,
                    padding: '0px 10px',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
              </>
              <>
              <InputLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '13px',
                  fontStyle: 'normal',
                  letterSpacing: '0.2em',
                  textTransform: 'capitalize',
                  textAlign: "left",
                  marginBottom: '5px',
                  marginTop: '10px',
                  color: "#8F8F8F"
              }}>Date of Birth</InputLabel>
            <FormControl fullWidth>
            <input
                  id="sign-up-dob"
                  name="sign-up-dob"
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #616161',
                    color: '#616161',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '37px',
                    marginTop: 1,
                    padding: '0px 10px',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
              </>
              <>
              <InputLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '13px',
                  fontStyle: 'normal',
                  letterSpacing: '0.2em',
                  textTransform: 'capitalize',
                  textAlign: "left",
                  marginBottom: '5px',
                  marginTop: '10px',
                  color: "#8F8F8F"
              }}>Wallet Address</InputLabel>
            <FormControl fullWidth>
            <input
                  id="sign-up-wallet"
                  name="sign-up-wallet"
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #616161',
                    color: '#616161',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '37px',
                    marginTop: 1,
                    padding: '0px 10px',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
            </>    
          </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ padding: {xs:"0px 7vw 20px",md:"0px 55px 20px 70px"}, margin: "auto" }}
              rowGap={2}
                >
                  
                  <Grid xs={"auto"}>
                  <Box sx={{ border: '5px solid #D9D9D9', padding:{xs: "7px 6px", md:"13px 12px"}, borderRadius: "10px", cursor: "pointer" }}
                  onClick={()=> setFlag(!flag)}
                  >
                    {flag ?
                      <img src={tick} /> : <Box sx={{ padding: "12px 11px" }} />}
                    </Box>
                  </Grid>
                  <Grid xs={"autp"} sx={{marginLeft:{xs:"10px",md:'45px'}}}>
                <Typography component={"span"}
                  sx={{
                    fontWeight: 400,
                    fontSize: {xs:13,md:15},
                    lineHeight: '125.2%',
                    color: "#8F8F8F",
                    textTransform: 'capitalize',
                    letterSpacing: '0.2em',
                    
                  }}
                >
                {'Accept '}
                <Typography component={"span"}
                  sx={{
                    fontWeight: 700,
                    color: "#F9D649",
                    textTransform: 'capitalize',
                    letterSpacing: '0.2em',
                  }}
                >
                  Disclaimers <br/>
                  & terms of service
                </Typography>
                    </Typography>
                    </Grid>
                <Grid xs={"auto"} sx={{ margin: 'auto' }}>
                  <MetaBlackBtn text={'sign up'} />
                    </Grid>
            </Grid>
            </>
            }
            {index===0 &&
            <>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              sx={{ padding: {xs:"0px 10vw 40px" ,md:"100px 60px 40px 70px"}, margin: "auto", paddingTop:{xs:"10px", sm: '30px'}}}
          >
              <>
              <InputLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '13px',
                  fontStyle: 'normal',
                  letterSpacing: '0.2em',
                  textTransform: 'capitalize',
                  textAlign: "left",
                  marginBottom: '20px',
                  marginTop: '25px',
                  color: "#8F8F8F"
              }}>Username</InputLabel>
            <FormControl fullWidth>
            <input
                  id="sign-in-user-name"
                  name="sign-in-user-name"
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #616161',
                    color: '#616161',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '37px',
                    marginTop: 1,
                    padding: '0px 10px',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
            </>
            <>
              <InputLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '13px',
                  fontStyle: 'normal',
                  letterSpacing: '0.2em',
                  textTransform: 'capitalize',
                  textAlign: "left",
                  marginBottom: '20px',
                  marginTop: '25px',
                  color: "#8F8F8F"
              }}>password</InputLabel>
            <FormControl fullWidth>
            <input
                  id="sign-in-password"
                      name="sign-in-password"
                      type={"password"}
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #616161',
                    color: '#616161',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '37px',
                    marginTop: 1,
                    padding: '0px 10px',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
                </>  
              </Grid>
              <Grid
              container
              direction="row"
              justifyContent={width > 768 ? "space-between" : "center"}
              alignItems="center"
              sx={{ padding: "20px 70px 100px 70px", }}
                  columnGap={2}
                  rowGap={2}
            >
                <Grid xs={"auto"}>
                  <MetaBlackBtn text={'sign in'} />
                </Grid>
                <Grid xs={'auto'} >
                <MetaBlackBtn text={' Forgot Password'} />
                    </Grid>
                    </Grid>
            </>
            }
          </Grid> 
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{padding: "70px 0px", display: {xs:'flex' ,md:"none"}, backgroundColor:'#000'}}
            >
              <Grid item={"auto"}>
                  <img src={logo_login} style={{ width: "100%", height: "100%" }} />
              </Grid>
              </Grid>
          </Grid>
       
        </DialogContent>
      </Dialog>
  );
}

export default SignInDailog;
