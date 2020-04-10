/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './title';

// Generate Order Data
function createData(id, date, name, status, paymentMethod, amount) {
  return { id, date, name, status, paymentMethod, amount };
}

const rows = [
  createData(0, '#7835', 'Today', 'Paid', '••••', 512.44),
  createData(1, '#7834', 'Today', 'Paid', '••••', 866.99),
  createData(2, '#7833', 'Today', 'Paid', '••••', 400.81),
  createData(3, '#7832', 'Today', 'Paid', '••••', 654.39),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>New orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            {/*<TableCell>Payment Method</TableCell>*/}
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
              {/*<TableCell>{row.paymentMethod}</TableCell>*/}
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
