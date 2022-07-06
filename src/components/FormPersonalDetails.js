import React, { Component } from 'react';
import {Button, Dialog, AppBar, TextField} from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './CC_BlackLogo.png';


export class FormPersonalDetails extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
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
            Enter Pickup Details
          </Typography>
        </Toolbar>
      </AppBar>  
              <TextField
                label="Description of SMALL Storage Items & Boxes (Comma Seperated)"
                placeholder="SMALL Storage Items & Boxes"
                onChange={handleChange('smallDesc')}
                defaultValue={values.smallDesc}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                label="Description of MEDIUM Storage Items & Boxes (Commas Seperated)"
                placeholder="MEDIUM Storage Items & Boxes"
                onChange={handleChange('mediumDesc')}
                defaultValue={values.mediumDesc}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                label="Description of LARGE Storage Items & Boxes (Comma Seperated)"
                placeholder="LARGE Storage Items & Boxes"
                onChange={handleChange('largeDesc')}
                defaultValue={values.largeDesc}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                label="Description of EXTRA LARGE Items (Comma Seperated)"
                placeholder="EXTRA LARGE Items"
                onChange={handleChange('xlargeDesc')}
                defaultValue={values.xlargeDesc}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                label="Description of LARGE FURNITURE Storage Items (Comma Seperated)"
                placeholder="LARGE FURNITURE Storage Items"
                onChange={handleChange('large_furn_desc')}
                defaultValue={values.large_furn_desc}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                label="Fees"
                placeholder="Enter the fees incurred"
                onChange={handleChange('fees')}
                defaultValue={values.fees}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                label="Discounts"
                placeholder="Were there any discounts"
                onChange={handleChange('discounts')}
                defaultValue={values.discounts}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                label="Tips"
                placeholder="Enter the tipped dollar amount"
                onChange={handleChange('tips')}
                defaultValue={values.tips}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                label="Additional Notes"
                placeholder="Is there any other relevant details worth noting?"
                onChange={handleChange('notes')}
                defaultValue={values.notes}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                label="Name of Movers"
                placeholder="First and Last NAMES of Moving Team"
                onChange={handleChange('movers')}
                defaultValue={values.movers}
                margin="normal"
                fullWidth
              />
              <br />
  
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Continue</Button>

              <Button
                color="secondary"
                variant="contained"
                onClick={this.back}
              >Back</Button>
              </Dialog>

          </>
        </MuiThemeProvider>
      );
    }
  }
  
  export default FormPersonalDetails;