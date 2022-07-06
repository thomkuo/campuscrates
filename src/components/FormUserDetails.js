import React, { Component } from 'react';
import {Button, Dialog, AppBar, TextField, Select, MenuItem, InputLabel} from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './CC_BlackLogo.png';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img src={logo} alt="logo" style={{width:"50px", height:"50px"}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Enter Customer Details
          </Typography>
        </Toolbar>
      </AppBar>            
      <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <InputLabel id="demo-simple-select-label">At what school has the storage service been provided?</InputLabel>
            <Select
              label="College"
              defaultValue={values.college}
              margin="normal"
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange('college')}            >
              <MenuItem value={"Baylor"}>Baylor</MenuItem>
              <MenuItem value={"SMU"}>SMU</MenuItem>
              <MenuItem value={"St. Edwards"}>St. Edwards</MenuItem>
              <MenuItem value={"TCU"}>TCU</MenuItem>
              <MenuItem value={"UT"}>UT</MenuItem>
              </Select>
            <br />
            <InputLabel id="demo-simple-select-label">How did the items get picked up?</InputLabel>
            <Select
              label="Pickup Type"
              defaultValue={values.pickupType}
              margin="normal"
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange('pickupType')}            >
              <MenuItem value={"Room Pickup"}>Room Pickup</MenuItem>
              <MenuItem value={"Curbside"}>Curbside</MenuItem>
              <MenuItem value={"UPS Store Drop-off"}>UPS Store Drop-off</MenuItem>
              </Select>
            <br />
            <InputLabel id="demo-simple-select-label">When does the customer expect delivery?</InputLabel>
            <Select
              label="Delivery Range"
              defaultValue={values.deliveryRange}
              margin="normal"
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange('deliveryRange')}            >
              <MenuItem value={"May"}>May</MenuItem>
              <MenuItem value={"June"}>June</MenuItem>
              <MenuItem value={"July"}>July</MenuItem>
              <MenuItem value={"August or Unknown"}>August or Unknown</MenuItem>
              </Select>
            <br />
            <InputLabel id="demo-simple-select-label">Are there any items that went to the store to be packed or shipped?</InputLabel>
            <Select
              label="Any Ship to School?"
              defaultValue={values.s2s}
              margin="normal"
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange('s2s')}            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
              </Select>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;