import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';

import {Button} from '@material-ui/core'

import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './CC_BlackLogo.png';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = e => {
    e.preventDefault();
    this.props.submitButton();
  };

  render() {
    var {
      values: { firstName, lastName, email, college, pickupType, deliveryRange, s2s, smallDesc, mediumDesc, largeDesc, xlargeDesc, large_furn_desc, fees, discounts, tips, notes, movers, totPrice, totItems }
    } = this.props;

    //inputs description of item size and cost, outputs cost of all items
    function transformCost(input, cost) {
      var array = input.split(',');
      //isolate first 2 digits of each element
      //sum all values in array together
      var arrayLen = array.length;
      let holder = "";
      let sum = 0;
      for (let i = 0; i < arrayLen; i++) {
        holder = array[i].substr(0,2);
        sum += Number(holder);
      }
      //multiply by cost
      var subtotal = sum * cost
      return subtotal
    }

    //inputs description of item size, outputs number of items
    function totalItems(input) {
      var array = input.split(',');
      //isolate first 2 digits of each element
      //sum all values in array together
      var arrayLen = array.length;
      let holder = "";
      let sum = 0;
      for (let i = 0; i < arrayLen; i++) {
        holder = array[i].substr(0,2);
        sum += Number(holder);
      }
      return sum
    }

    //FindTotal not function :)
    var costSmall = transformCost(smallDesc,39);
    var costMedium = transformCost(mediumDesc,55);
    var costLarge = transformCost(largeDesc,65);
    var costXLarge = transformCost(xlargeDesc,79);
    var costLFurn = transformCost(large_furn_desc,99);
    var findTotal = costSmall+costMedium+costLarge+costXLarge+costLFurn+Number(fees)-Number(discounts)+Number(tips);
    totPrice = findTotal;
    var numItems = totalItems(smallDesc)+totalItems(mediumDesc)+totalItems(largeDesc)+totalItems(xlargeDesc)+totalItems(large_furn_desc);
    totItems = numItems;
    //recieves all descriptions, outputs array of descriptions
    function itemizedRecipt(small,medium,large,xlarge,furniture) {
      var small1 = small.split(',');
      var medium1 = medium.split(',');
      var large1 = large.split(',');
      var xlarge1 = xlarge.split(',');
      var furn1 = furniture.split(',');
      const itemized1 = small1.concat(medium1, large1);
      const itemized = itemized1.concat(xlarge1, furn1);
      return itemized
    }
    var itemArray = itemizedRecipt(smallDesc, mediumDesc, largeDesc, xlargeDesc,large_furn_desc).filter(blankArray);
    const listItems = itemArray.map((item,index) =>
    <ListItem>
      <ListItemText primary= {index + 1} secondary= {item}/>
    </ListItem>
    );

    function blankArray(value) {
      return value !== "";
    }
    
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
            Confirm and Sign
          </Typography>
        </Toolbar>
      </AppBar>  
            <List>
              <ListItem>
                <ListItemText primary="First Name:" secondary={firstName}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name:" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email:" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="College:" secondary={college} />
              </ListItem>
              <ListItem>
                <ListItemText primary="How did the items get picked up:" secondary={pickupType} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tenative Delivery Date:" secondary={deliveryRange} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Are there any items that went to the store to be packed or shipped" secondary={s2s} />
              </ListItem>
              {listItems}
              <ListItem>
                <ListItemText primary="Fees:" secondary={fees} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Discounts:" secondary={discounts} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tips:" secondary={tips} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Notes:" secondary={notes} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Movers:" secondary={movers} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Total Items:" secondary={totItems} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Total Price:" secondary={totPrice} />
              </ListItem>
            </List>
            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={
                this.submit
              }>
            Confirm & Continue</Button>

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

export default Confirm;