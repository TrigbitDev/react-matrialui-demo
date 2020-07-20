import React, { useState } from "react";
import Form from "./Form";
import ListContainer from "../list/ListContainer";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  container: {
    margin: 8,
  },
}));

let count = 2;

const BasicAnimation = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      text: "This is fisrt try.",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      setItems([...items, { id: count, text: value }]);
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

export default BasicAnimation;
