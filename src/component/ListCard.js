import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    margin: theme.spacing(1),
  },
  margin: {
    margin: 8,
  },
}));

const ListCard = ({ item: { text } }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box className={classes.margin}>
        <Typography>{text}</Typography>
      </Box>
    </Paper>
  );
};

export default ListCard;
