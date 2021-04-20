import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields({setSearchTerm,searchTerm:value}) {
  const classes = useStyles();
  const handleChange = (event) => {
    // console.log('hello')
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{width:'95%',marginLeft:'10px'}}>
      <TextField
      id="standard-full-width"
      label="Search For Items"
      style={{ margin: 8 }}
      onChange={handleChange}
      placeholder="Search"
      fullWidth
      value={value}
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />

    </div>
  );
}
