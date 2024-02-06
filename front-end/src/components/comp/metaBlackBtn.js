import { Button} from '@mui/material';

export const MetaBlackBtn = ({text, xsmall= false}) => {
  return (
          <Button
            sx={{
              color: '#F9D649', fontSize: {xs: xsmall?'11px':'13px', sm: "16px", md: '19px'}, textAlign: 'center', fontFamily: 'Orbitron',
              height: '45px',
              background:' #000000',
              borderRadius: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: "2.28px solid #FFD700",
              padding: {xs: xsmall ?'11px 10px':'11px 20px',md:'11px 26px'},
              boxShadow: '0px 7px 6px 0px #FFFFFF33',
              ':hover': {
                //filter: 'drop-shadow(0px 0px 20px #F9D649)',
                boxShadow: '0px 0px 25px #FFD700',
                background:' #000000',
              },
              '.MuiTouchRipple-root span': {
                backgroundColor: '#FFD700',
                color: '#000',
              }
              
            }}
          >
          {text}
          </Button>
  );
}
