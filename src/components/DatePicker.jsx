import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';

export class DatePicker extends Component {
  state = {
    calendarFocused: null,
  };

  handleFocusChange = (calendarFocused) => this.setState({ calendarFocused });

  handleDatesChange = ({ startDate, endDate }) => {
    const { onSetStartDate, onSetEndDate } = this.props;
    onSetStartDate(startDate);
    onSetEndDate(endDate);
  }

  render() {
    const { calendarFocused } = this.state;
    const { filters } = this.props;
    return (
      <form>
          <DateRangePicker
            startDate={filters.startDate}
            startDateId="startId"
            endDate={filters.endDate}
            endDateId="endId"
            onDatesChange={this.handleDatesChange}
            focusedInput={calendarFocused}
            onFocusChange={this.handleFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates
          />
      </form>
    );
  }
}

DatePicker.defaultProps = {
  filters: {
    startDate: null,
    endDate: null,
  }
};

DatePicker.propTypes = {
  onSetStartDate: PropTypes.func.isRequired,
  onSetEndDate: PropTypes.func.isRequired,
};

export default DatePicker;