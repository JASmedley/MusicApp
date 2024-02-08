import React, {useState, useEffect} from 'react';
import OnlineCard from './OnlineCard'
import OtherCards from './OtherCards'
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





export default function Dashboard() {

  const [isOnline, setIsOnline] = useState(true);
  const [quality, setQuality] = React.useState('');
  const [soundQuality, setSoundQuality] = useState(false);
  const [volume, setVolume] = useState(false)

  const changeQuality = (event) => {
    setQuality(event.target.value);
    setSoundQuality(event.target.value === 'Low')
  };

  const changeVolume = (event) => {
    setVolume(parseInt(event.target.value) >= 80)
  }

 
  

  useEffect(() => {
    console.log(isOnline)
  }, [isOnline])
  return (
    <>
    <Typography variant="h4">System Notifications</Typography>
    <div className='onlineCards'>
  <OnlineCard
    isOnline={isOnline}
    setIsOnline={setIsOnline}
    />
    
  <OtherCards 
    title="Master Volume" 
    body="Overrides all other sound settings in this application."
    >

      <Slider defaultValue={volume} step={10} marks min={0} max={100}  onChange={changeVolume} />
   

    </OtherCards >
    <div className = "onlineCard1">
    <OtherCards 
    title="Sound Quality" 
    body="Manually control the music quality in event of poor connection.">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Quality</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={quality}
        onChange={changeQuality}
        label="Volume">
        <MenuItem value ="Low">Low</MenuItem>
        <MenuItem value ="Normal">Normal</MenuItem>
        <MenuItem value ="High">High</MenuItem>
      </Select>
      </FormControl>
    </OtherCards>
    </div>
    </div>

    <Typography variant="h5">System Notifications</Typography>
    {isOnline && (
      <p>    You won't be able to share or stream
      </p>
    )}

{soundQuality && (
      <p>    Music quality is degraded. Increase quality if your connection allows it.
      </p>
    )}
    {volume && (
      <p>    Listening to music at a high volume could cause long-term hearing loss.
      </p>
    )}
    
    </>

  );
}