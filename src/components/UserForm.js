import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails.js';
import FormPersonalDetails from './FormPersonalDetails.js';
import Confirm from './Confirm.js';
import Success from './Success.js';
import axios from 'axios';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        college: '',
        pickupType: '',
        deliveryRange: '',
        s2s: '',
        smallDesc: '', 
        mediumDesc: '', 
        largeDesc: '', 
        xlargeDesc: '', 
        large_furn_desc: '', 
        fees: 0, 
        discounts: 0, 
        tips: 0, 
        notes: '', 
        movers: '',
        totPrice: 0,
        totItems: 0
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    //GO back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    submitButton = () => {
      const { step } = this.state;
      this.setState({
          step: step + 1,
      })
        console.log(this.state);
  }

    //Handles field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };
      
    render() {
        const { step } = this.state;
        var { firstName, lastName, email, college, pickupType, deliveryRange, s2s, smallDesc, mediumDesc, largeDesc, xlargeDesc, large_furn_desc, fees, discounts, tips, notes, movers, totPrice, totItems } = this.state;
        var values = { firstName, lastName, email, college, pickupType, deliveryRange, s2s, smallDesc, mediumDesc, largeDesc, xlargeDesc, large_furn_desc, fees, discounts, tips, notes, movers, totPrice, totItems };
    
        switch (step) {
          case 1:
            return (
              <FormUserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 2:
            return (
              <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 3:
            return (
              <Confirm
                prevStep={this.prevStep}
                submitButton={this.submitButton}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 4:
            return <Success />;
          default:
            (console.log('This is a multi-step form built with React.'))
        }
      }
    }
    
    export default UserForm;  