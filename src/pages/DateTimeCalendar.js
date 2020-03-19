import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

class DateTimeCalendar extends Component {
 state = {
    value: new Date(),
  }

   onChange = date => this.setState({ date })
   onChange = value => this.setState({ value })

  render() {
    const { value } = this.state;

    return (
      <>
        <DateTimePicker
              amPmAriaLabel="Select AM/PM"
              calendarAriaLabel="Toggle calendar"
              clearAriaLabel="Clear value"
              dayAriaLabel="Day"
              hourAriaLabel="Hour"
              maxDetail="second"
              minuteAriaLabel="Minute"
              monthAriaLabel="Month"
              nativeInputAriaLabel="Date and time"
              onChange={this.onChange}
              secondAriaLabel="Second"
              value={value}
              yearAriaLabel="Year"
            />
      </>
    );
  }
}

export default DateTimeCalendar;

//http://projects.wojtekmaj.pl/react-datetime-picker/
//https://github.com/YouCanBookMe/react-datetime