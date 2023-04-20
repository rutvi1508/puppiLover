import React from "react";
import {
  Select,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import "./dropDown.scss";

const DropDown = ({
  handleChange,
  id,
  labelId,
  value,
  label,
  Peopleoptions,
  option,
}) => {
  return (
    <div>
      <FormControl className="create-account-select">
        {/*  <InputLabel id="demo-simple-select-standard-label">
          What is your gender?
        </InputLabel> */}
        <Select
          labelId={labelId}
          id={id}
          value={value}
          onChange={handleChange}
          label={label}
          className="select-gender-dropdown"
        >
          {Peopleoptions.map((option) => (
            <MenuItem key={option} value={option} Peopleoptions={Peopleoptions}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
