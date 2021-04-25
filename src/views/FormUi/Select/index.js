import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import {useField, useFormikContext} from "formik";
import { MessageTwoTone } from "@material-ui/icons";




const SelectWrapper = ({
    name,
    options,
    ...otherProps
}) => {
    const {setFiledValue} =useFormikContext();
    const [field, meta]=useField(name);

  const handleChange = (evt) => {
      const {value}=evt.target;
      setFiledValue(name,value);
  };

  const configSelect = {
      ...field,
      ...otherProps,

    select: true,
    variant: "outlined",
    fullWidth: true,
    onchange: handleChange,
  };
  if(meta && meta.error && meta.touched){
      configSelect.error=true;
      configSelect.helperText=meta.error;
  }
  return <TextField {...configSelect}>
      {Object.keys(options).map((item,pos) =>{

          return (
<MenuItem   key={pos} value={item}>
    {options[item]}


</MenuItem>

          )
      })}



  </TextField>;
};

export default SelectWrapper;
