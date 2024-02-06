import { InputLabel} from '@mui/material';

export const MetaTextLabel = ({text}) => {
  return (
    <InputLabel
    sx={{
      fontWeight: 700,
      fontFamily: "Orbitron",
      fontSize: {xs:"13px",sm:"14px",md:'16px'},
      fontStyle: 'normal',
      letterSpacing: '0.11em',
      textTransform: 'uppercase',
      textAlign: "left",
      color: "#FFF"
  }}>{text}</InputLabel>
  );
}
