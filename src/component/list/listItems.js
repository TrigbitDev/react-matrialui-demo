import React from "react";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

export const mainListItems = (
  <Box>
    <ListItem component={Link} to={"/"}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="GridExample" />
    </ListItem>
    <ListItem component={Link} to={"/hiddenUp"}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="HiddenUp" />
    </ListItem>
    <ListItem component={Link} to={"/hiddenDown"}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="HiddenDown" />
    </ListItem>
    <ListItem component={Link} to={"/basicComponent"}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="BasicComponent" />
    </ListItem>
    <ListItem component={Link} to={"/basicAnimation"}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="BasicAnimation" />
    </ListItem>
  </Box>
);

export const secondaryListItems = (
  <Box>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem component={Link} to={"/selectors"}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="CSS Selectors" />
    </ListItem>
    <ListItem component={Link} to={"/muiSelector"}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Material Ui Selectors" />
    </ListItem>
    <ListItem component={Link} to={"/reverseString"}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="ReverseString" />
    </ListItem>
  </Box>
);
