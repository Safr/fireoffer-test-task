import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import DatePicker from '../../components/DatePicker';
import { filters, altFilters } from '../../__mocks__/filters';

describe('DatePicker component', () => {
  let onSetStartDate;
  let onSetEndDate;
  let wrapper;

  beforeEach(() => {
    onSetStartDate = jest.fn();
    onSetEndDate = jest.fn();
    wrapper = shallow(<DatePicker
      filters={filters}
      onSetStartDate={onSetStartDate}
      onSetEndDate={onSetEndDate}
    />);
  });

  test('should render DatePicker correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should render DatePicker with altFilters', () => {
    wrapper.setProps({
      filters: altFilters,
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should handle date change', () => {
    const startDate = moment(0).add(4, 'days');
    const endDate = moment(0).add(8, 'days');
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(onSetStartDate).toHaveBeenLastCalledWith(startDate);
    expect(onSetEndDate).toHaveBeenLastCalledWith(endDate);
  });
  test('should handle data focus change', () => {
    const focused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toBe(focused);
  });
});

