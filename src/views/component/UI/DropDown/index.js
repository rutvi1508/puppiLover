import React, { useState, useEffect } from "react";
import { Select, FormControl, MenuItem } from "@mui/material";
import "./dropDown.scss";
import _ from "lodash";

const DropDown = ({
  handleChange,
  id,
  labelId,
  value,
  label,
  dropdownArray,
}) => {
  const [DDArray, setDDArray] = useState([]);

  useEffect(() => {
    setDDArray(dropdownArray);
    console.log("dropdownArray", dropdownArray);
    // setOpen(false);
  }, [dropdownArray]);

  const sortedArray = _.sortBy(DDArray, "name");
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
          {sortedArray.map((value, option) => {
            console.log("valuewed", value);
            console.log("valuewed", option);
            return (
              <>
                <MenuItem key={option} value={value}></MenuItem>
              </>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
