import React from 'react';
import { shallow } from 'enzyme';
import PaymentTable from '../../components/PaymentTable';
import payments from '../../__mocks__/apiResponse';

describe('PaymentTable', () => {
  test('should render PaymentTable correctly without props', () => {
    const wrapper = shallow(<PaymentTable payments={[]} classes={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should render PaymentTable correctly with props', () => {
    const wrapper = shallow(<PaymentTable payments={payments} classes={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
    
});
