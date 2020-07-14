import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  paper_new: {
    padding: theme.spacing(8),
    position: "absolute",
    background: "blue",
  },
  fixedHeight: {
    height: 240,
    marginTop: 24,
  },
}));

export default function Deposits() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedBoxPaper = clsx(classes.paper_new);
  return (
    <div>
      <Paper className={fixedBoxPaper}>
        <React.Fragment>
          <Title>Test Deposits</Title>
        </React.Fragment>
      </Paper>
      <Paper className={fixedHeightPaper}>
        <React.Fragment>
          <Title>Recent Deposits</Title>
          <Typography component="p" variant="h4">
            $3,024.00
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            on 15 March, 2019
          </Typography>
          <div>
            <Link color="primary" href="#" onClick={preventDefault}>
              View balance
            </Link>
          </div>
        </React.Fragment>
      </Paper>
    </div>
  );
}
