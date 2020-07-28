import React, { useState } from "react";
import Form from "./Form";
import ListContainer from "../list/ListContainer";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "../../helper/CommanFunction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  container: {
    margin: 8,
  },
}));

let count = 1;

const ReverseString = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const newValue = value.toReverse();
      setItems([...items, { id: count, text: newValue }]);
      setValue("");
      count++;
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </Box>
      <Box className={classes.container}>
        <ListContainer items={items} />
      </Box>
    </Box>
  );
};

export default ReverseString;
