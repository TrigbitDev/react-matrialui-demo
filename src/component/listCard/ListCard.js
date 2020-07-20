import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box } from "@material-ui/core";
import Tilte from "../Title";

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
        <Tilte>{text}</Tilte>
      </Box>
    </Paper>
  );
};

export default ListCard;
