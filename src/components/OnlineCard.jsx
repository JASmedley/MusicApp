import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));


export default function OnlineCard(props) {
  return (
    <Card sx={{ maxWidth: 275, margin: "64px" }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{marginBottom: "15px"}}>
          Online Mode
        </Typography>
        <Typography variant="body2">
        Is the application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
      {<PinkSwitch {...label} defaultChecked={props.isOnline} onChange={()=> props.setIsOnline(!props.isOnline)} />}
      </CardActions>
    </Card>
    
  );
}