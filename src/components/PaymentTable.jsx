import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#242424',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const styles = theme => ({
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    position: 'sticky',
    top: 0,
    fontSize: '16px',
  },
  td: {
    borderLeft: '1px solid rgba(224, 224, 224, 1)',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginLeft: theme.spacing.unit * 1.2,
    fontSize: 18,
  },
});

const renderPaymentInfo = (payments, td) => {
  let id;
  let date;
  let sum;
  let purpose;
  let balance;
  return payments.map((paymentItem) => {
    id = paymentItem.id
    date = paymentItem.date;
    sum = paymentItem.sum;
    purpose = paymentItem.purpose;
    balance = paymentItem.balance;
    return (
      <TableRow key={id}>
        <TableCell component="td" scope="row">
        {moment(date).format('YYYY-MM-DD')}
        </TableCell>
        <TableCell className={td}component="td" scope="row">{sum}</TableCell>
        <TableCell className={td}component="td" scope="row">{purpose}</TableCell>
        <TableCell className={td}component="td" scope="row">{balance}</TableCell>
      </TableRow>
    );
  });
};

const PaymentTable = ({ payments, classes }) => {
  return (
    <div className="table-wrapper">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell className={classes.th}>
            <span className={classes.iconWrapper}>
              Date
              <DateRangeIcon className={classes.icon} />
              </span>
            </CustomTableCell>
            <CustomTableCell className={classes.th}>
            <span className={classes.iconWrapper}>
              Sum
              <AttachMoneyIcon className={classes.icon} />
              </span>
            </CustomTableCell>
            <CustomTableCell className={classes.th}>
            <span className={classes.iconWrapper}>
              Purpose
              <AssignmentIcon className={classes.icon} />
              </span>
            </CustomTableCell>
             <CustomTableCell className={classes.th}>
            <span className={classes.iconWrapper}>
              Balance
              <AccountBalanceWalletIcon className={classes.icon}/>
            </span>
            </CustomTableCell>
          </TableRow>
        </TableHead>
       <TableBody>
          {renderPaymentInfo(payments, classes.td, classes.icon)}
        </TableBody>
      </Table>
    </div>
  );
};

PaymentTable.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    sum: PropTypes.string.isRequired,
    purpose: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  })),
  classes: PropTypes.shape({
    table: PropTypes.string.isRequired,
    td: PropTypes.string.isRequired,
    th: PropTypes.string.isRequired,
  }),
};

export default withStyles(styles)(PaymentTable);
