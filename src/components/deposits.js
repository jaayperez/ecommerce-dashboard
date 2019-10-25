/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

const useStyles = makeStyles (theme => ({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Deposits() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>

    <Grid item xs={12} md={4} lg={3}>
      <Paper className={fixedHeightPaper}>
      <Title>Total Revenue</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View balance
        </Link>
      </div>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4} lg={3}>
      <Paper className={fixedHeightPaper}>
      <Title>Revenue from Shopify</Title>
      <Typography component="p" variant="h4">
        $28,449.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View balance
        </Link>
      </div>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4} lg={3}>
      <Paper className={fixedHeightPaper}>
      <Title>Revenue from Amazon</Title>
      <Typography component="p" variant="h4">
        $15,392.30
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View balance
        </Link>
      </div>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4} lg={3}>
      <Paper className={fixedHeightPaper}>
      <Title>Revenue from eBay</Title>
      <Typography component="p" variant="h4">
        $13,440.50
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View balance
        </Link>
      </div>
      </Paper>
    </Grid>
    </React.Fragment>
  );
}
