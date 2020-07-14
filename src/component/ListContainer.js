import React from "react";
import ListCard from "./ListCard";
import { useTransition, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 8,
  },
}));

const ListContainer = ({ items }) => {
  const classes = useStyles();
  const transition = useTransition(items, (items) => items.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
  });

  return (
    <>
      {transition.map(({ item, key, props }) => (
        <animated.div key={key} style={props} className={classes.container}>
          <ListCard item={item} />
        </animated.div>
      ))}
    </>
  );
};

export default ListContainer;
