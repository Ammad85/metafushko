import { Box, Button, ButtonGroup, FormControl, Grid, InputLabel, Typography } from '@mui/material';
import makeStyles from '@emotion/styled';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css'
import { FileUploader } from "react-drag-drop-files";
import { MetaBlackBtn, MetaPageHeaderDetail, MetaPageHeaderText, MetaTextLabel } from './comp';

const fileTypes = ["JPEG", "PNG", "GIF"];

function Support() {
  

  const useStyles = makeStyles({
    root: {
      border: 'none !important',
      "& .MuiOutlinedInput-root": {
        outline: 'none',
        "&.Mui-focused fieldset": {
          border: "none",
          outline: 'none',
          underline: 'none',
        }
      }
    }
  });

  const classes = useStyles();
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const detail = "Get Assistance with product, account or payment related issues. Our support team will try to help you, however right now we can't specify the waiting time for a response.";
  const detail1 = "If you are passionate about testing new technologies, platforms, and features, we invite you to join the Sensorium Galaxy test community. Get early access to our latest releases before and benefit from exclusive discounts!";

  
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
        <MetaPageHeaderText text="SUBMIT A REQUEST" />
        </Grid>
        <Grid item={'auto'} sx={{padding:"25px 15vw"}}>
          <MetaPageHeaderDetail text={detail} />
        </Grid>
      </Grid>
      
      <Grid
          container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-start"
          sx={{padding:{xs:'20px 10vw',sm:'40px 15vw',md:'40px 30vw'}}}
      >
        <>
            <Box sx={{ marginBottom: 1,paddingLeft: '5px'}}>
            <MetaTextLabel text='YOUR EMAIL ADDRESS' />
            </Box>
            <FormControl fullWidth>
            <input
                  id="sign-up-name"
                  name="sign-up-name"
                  style={{
                    borderRadius: '22px',
                    backgroundColor: "#2D2D2D",
                    color: '#FFF',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '35px',
                    marginTop: 1,
                    padding: '5px 20px',
                    border: '1px solid #2D2D2D',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
        </>
        <>
            <Box sx={{ marginBottom: 1,paddingLeft: '5px', marginTop: {xs:3, md: 6}}}>
            <MetaTextLabel text='SUBJECT' />
            </Box>
            <FormControl fullWidth>
            <input
                  id="sign-up-name"
                  name="sign-up-name"
                  style={{
                    borderRadius: '22px',
                    backgroundColor: "#2D2D2D",
                    color: '#FFF',
                    fontWeight: 500,
                    outline: 'none !important',
                    height: '35px',
                    marginTop: 1,
                    padding: '5px 20px',
                    border: '1px solid #2D2D2D',
                   
                  }}
                  className={classes.root}

            />
            </FormControl>
        </>
        <>
        <Box sx={{ marginBottom: 1,paddingLeft: '5px', marginTop: {xs:3, md: 6}}}>
        <MetaTextLabel text='Description'/>
        </Box>
            <FormControl fullWidth>
            <textarea
            id="sign-up-name"
              name="sign-up-name"
            style={{
              borderRadius: '22px',
              backgroundColor: "#2D2D2D",
              color: '#FFF',
              fontWeight: 500,
              outline: 'none !important',
              height: '35px',
              marginTop: 1,
              padding: '15px 20px',
              border: '1px solid #2D2D2D',
              resize: 'none',
              height: "250px"
             
            }}
            className={classes.root}
            />
            </FormControl>
        </>

        <>
        <Box sx={{ marginBottom: 1,paddingLeft: '5px', marginTop: {xs:3, md: 6}}}>
        <MetaTextLabel text='Attachments (optional)'/>
        </Box>
            <FormControl fullWidth>
            <FileUploader
              multiple={false}
              name="file"
              types={fileTypes}
              handleChange={handleChange}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    borderRadius: '22px',
                    backgroundColor: "#2D2D2D",
                    color: '#FFF',
                    fontWeight: 500,
                    outline: 'none !important',
                    padding: '0px 0px 0px 20px',
                    border: '1px solid #2D2D2D',
                }}
              >
                <Typography component={'span'} sx={{
                  fontSize: '14px',
                  textAlign: 'left',
                  width: {xs:'50%'},
                    color: '#9B9B9B',
                    fontWeight: 500,}}>
                {file? file.name:'Add file or drop files here'}
                </Typography>
                <span>
                <MetaBlackBtn text='ADD' />
                </span>
              </Grid>
      </FileUploader>
            </FormControl>
        </>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{padding: '35px 0px 10px'}}
        >
        <MetaBlackBtn text='SUBMIT' />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: '45px 8vw', background: 'linear-gradient(270deg, #F9D649 -30.87%, #915700 100%)' }}
        rowGap={4}
      >
          <MetaPageHeaderText text='Put us to the test!' color='#000000' weight={900}/>
          <MetaPageHeaderDetail text={detail1} color='#000000'/>
          <MetaBlackBtn text='GET EARLY ACCESS' />
        </Grid>
    </Box>
  );
}

export default Support;
