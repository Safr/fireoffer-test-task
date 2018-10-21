import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import App from '../../App';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />,
    );
  });
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should set initial state', () => {
    expect(wrapper.state()).toBeTruthy();
  });
  test('should set state startDate', () => {
    const startDate = moment();
    const filters = { startDate, endDate: null };
    wrapper.instance().handleStartDate(moment(startDate));
    expect(wrapper.state('filters')).toEqual(filters);
  });
  test('should set state endDate', () => {
    const endDate = moment();
    const filters = { startDate: null, endDate };
    wrapper.instance().handleEndDate(moment(endDate));
    expect(wrapper.state('filters')).toEqual(filters);
  });
  test('should select payments by date range', () => {
    wrapper.setState({ filters: {
      startDate: moment('2018-10-28'),
      endDate: moment('2018-10-31'),
    }});
    const result = wrapper.instance().selectPayments();
    expect(result).toHaveLength(1);
  });
});
