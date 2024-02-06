import { Box, ButtonGroup, Grid } from '@mui/material';
import bg1 from './bg1.png';
import bg2 from './bg2.png';
import bg3 from './bg3.png';
import bg4 from './bg4.png';
import Carousel from "react-responsive-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from '@mui/icons-material';
import { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import nexticon from './nexticon.png';
import previcon from './previcon.png';



function MainCarousel() {
  const ref = useRef(null);

  const images = [
    bg1,
    bg2,
    bg3,
    bg4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slideNext = () => {
    ref.current.slideNext();
  };

  const slidePrev = () => {
    ref.current.slidePrev();
  };
  const onSlideChanged = (e) => {
    setCurrentIndex(e.item);
  }

  const items = images.map((item, i) => <div key={i} style={{backgroundImage: `url(${item})`, width: '162px', height: '78px', backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', margin: 'auto',
  borderRadius: '22px',
    border: i === currentIndex ? '3px solid #F9D649' : '2px solid rgba(255, 255, 255, 0.19)',
    filter: i === currentIndex ?'drop-shadow(0px 0px 20px #F9D649)' : 'none'

  }}></div>)


  return (
      <Box sx={{backgroundImage: `url(${images[currentIndex]})`, height: { xs: '60vh', md: '85.6vh',  } , backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        height="100%"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{marginBottom: '85px'}}
        > 
        <Grid xs={2}>
          <img src={previcon} style={{cursor: 'pointer'}} onClick={slidePrev} />
        </Grid>
        <Grid xs={7}>
            <AliceCarousel
              items={items}
              ref={ref}
              // autoPlayInterval={3000}
              //   animationDuration={500}
              //   autoPlay={true}
              //   infinite={true}
              mouseTracking
              disableDotsControls
              activeIndex={currentIndex}
              dotsDisabled={true}
              disableButtonsControls
              onSlideChanged={onSlideChanged}
              responsive={
                  {
                    520: {
                    items: 1
                    },
                    680: {
                      items: 2,
                  },
                  1024: {
                      items: 3
                  },
                  1320: {
                    items: 4
                  }
                    
                  }}
            />
        </Grid>
        <Grid xs={2} style={{height: '100%'}}>
        <img src={nexticon} style={{cursor: 'pointer'}} onClick={slideNext}  />
        </Grid>
        </Grid>
        </Grid>
      </Box>
  );
}

export default MainCarousel;
