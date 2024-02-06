import { Typography} from '@mui/material';

export const MetaPageHeaderText = ({text, color='', weight= 0}) => {
  return (
    <Typography sx={{ color: color?color:'#F9D649', fontSize: {xs: '28px', md: '32px'},fontFamily: 'Orbitron', 
    fontWeight: weight?weight:900,
    letterSpacing: '0.115em',
    textTransform: 'uppercase',
  }}>
  {text}
  </Typography>
  );
}
