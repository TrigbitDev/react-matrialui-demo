import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 8,
  },
}));

export default function BasicComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
      <Box className={classes.root}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Secondary"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Primary"
          />
          <FormControlLabel
            disabled
            control={<Checkbox name="checkedD" />}
            label="Disabled"
          />
          <FormControlLabel
            disabled
            control={<Checkbox checked name="checkedE" />}
            label="Disabled"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedF}
                onChange={handleChange}
                name="checkedF"
                indeterminate
              />
            }
            label="Indeterminate"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="checkedH"
              />
            }
            label="Custom icon"
          />
        </FormGroup>
      </Box>
    </Box>
  );
}
