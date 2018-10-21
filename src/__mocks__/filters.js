import moment from 'moment';

const filters = {
  startDate: null,
  endDate: null,
};

const altFilters = {
  startDate: moment(0),
  endDate: moment(0).add(3, 'days'),
};

export { filters, altFilters };