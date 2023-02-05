import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { TextField } from "@mui/material";
import CountDownTimer from "../CountDownTimer";

const Calender = () => {
  const [value, setValue] = React.useState(moment("2022-04-07"));
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <CountDownTimer targetDate={value} />
    </LocalizationProvider>
  );
};

export default Calender;
