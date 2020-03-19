import React, { Component } from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

class SwitchToggle extends Component{
    render(){
      return( <BootstrapSwitchButton
        checked={false}
        onlabel='Inactive'
        onstyle='danger'
        offlabel='Active'
        offstyle='success'
        style='w-100 mx-1'
        onChange={(checked: boolean) => {
            this.setState({ isUserAdmin: checked })
        }}
    />
    )}
  }  


export default SwitchToggle

//https://www.npmjs.com/package/bootstrap-switch-button-react