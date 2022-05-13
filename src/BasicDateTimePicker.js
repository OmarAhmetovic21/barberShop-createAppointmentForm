import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

export default function BasicDateTimePicker({onAddDateAndTime}) {
  const [value, setValue] = React.useState(new Date());
  const todayDate = new Date();
 
  const handleChange = (newValue) => {
    setValue(newValue);
    onAddDateAndTime({ newValue })
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Date&Time picker"
            value={value}
            minDateTime = {todayDate}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
      </LocalizationProvider>
    </div>
  );
}