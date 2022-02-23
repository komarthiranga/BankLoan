import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { labelName } from '../Helpers/helper';
import useForm  from '../Hooks/use-form';
import FormHelperText from '@mui/material/FormHelperText';

const Field: React.FC<any> = ({ field, onChangeHandler }) => {
  const { fieldValue, isValid, fieldChangeHandler } = useForm(onChangeHandler, field);

  const textField = (field: any) => {
    return (
      <TextField
        required
        error={!isValid}
        id={field.name}
        name={field.name}
        label={labelName(field.name)}
        fullWidth
        autoComplete="given-name"
        variant="standard"
        onChange={fieldChangeHandler}
        helperText={`${!isValid ? `Please enter the correct ${labelName(field.name)}` : ''}`}
      />
    );
  };


  const numberField = (field: any) => {
    return (
      <TextField
        required
        error={!isValid}
        type="number"
        id={field.name}
        name={field.name}
        label={labelName(field.name)}
        fullWidth
        autoComplete="given-name"
        variant="standard"
        onChange={fieldChangeHandler}
        helperText={`${!isValid ? `Please enter the ${labelName(field.name)}` : ''}`}
      />
    );
  };


  const selectField = (field: any) => {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId={`${!isValid ? 'demo-simple-select-standard-label' : 'demo-simple-select-error-label'}` }
          id="demo-simple-select-standard"
          label="Gender"
          value={fieldValue}
          name={field.name}
          onChange={fieldChangeHandler}
        >
          {field.options.map((item: any, index: number) => (
            <MenuItem key={index + 1} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{!isValid ? `Please enter the ${labelName(field.name)}` : ''}</FormHelperText>
      </FormControl>
    );
  };

  const checkBoxField = (field: any) => {
    return <FormControlLabel control={<Checkbox />} label={field.name} />;
  };

  const getField = () => {
    switch (field.type) {
      case 'text':
        return textField(field);
      case 'email':
          return textField(field);
      case 'select':
        return selectField(field);
      case 'number':
        return numberField(field);
      case 'checkbox':
        return checkBoxField(field);
    }
  };

  return (
    <Grid item xs={12} sm={12}>
      {getField()}
    </Grid>
  );
};

export default Field;
