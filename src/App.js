import React, { Component } from 'react';
import moment from 'moment';
import PaymentTable from './components/PaymentTable';
import DatePicker from './components/DatePicker';
import './App.css';
import payments from './apiResponse';

class App extends Component {
  state = {
    payments,
    filters: {
      startDate: null,
      endDate: null,
    },
  };

  handleStartDate = (startDate) => {
    this.setState(prevState => ({
      filters: { ...prevState.filters, startDate },
    }));
  }

  handleEndDate = (endDate) => {
    this.setState(prevState => ({
      filters: { ...prevState.filters, endDate },
    }));
  }

  selectPayments = () => {
    const { payments, filters } = this.state;
    return payments.filter(payment => {
    const createdAtMoment = moment(payment.date);
    const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    return startDateMatch && endDateMatch;
  });
}

  render() {
    const { filters } = this.state;
    const selectedPayments = this.selectPayments();
    return (
      <div className="App">
        <DatePicker
          filters={filters}
          onSetStartDate={this.handleStartDate}
          onSetEndDate={this.handleEndDate}
        />
        <PaymentTable payments={selectedPayments} />
      </div>
    );
  }
}

export default App;
