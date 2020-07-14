import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 8,
  },
}));

export default function BasicComponent() {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <Box className={classes.root}>
        <Button className={classes.root} variant="contained">
          Default
        </Button>
        <Button className={classes.root} variant="contained" color="primary">
          Primary
        </Button>
        <Button className={classes.root} variant="contained" color="secondary">
          Secondary
        </Button>
        <Button className={classes.root} variant="contained" disabled>
          Disabled
        </Button>
      </Box>
      <Box className={classes.root}>
        <ButtonGroup
          className={classes.root}
          color="primary"
          aria-label="outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          className={classes.root}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          className={classes.root}
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
