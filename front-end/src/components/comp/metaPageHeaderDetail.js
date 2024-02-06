import { Typography} from '@mui/material';

export const MetaPageHeaderDetail = ({text, color= ''}) => {
  return (
    <Typography sx={{ color: color?color:'#FFF', fontSize: {xs: '18px',sm: '20px', md: '23px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
          }}>
          {text}
    </Typography>
  );
}
