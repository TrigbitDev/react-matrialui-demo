import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: "red",
    "& p": {
      margin: 0,
      color: "green",
      "& span": {
        color: "blue",
        margin: 8,
      },
    },
  },
  span: {
    "&&": {
      margin: 26,
    },
  },
  span2: {
    margin: 8,
    "& $content": {
      fontSize: "18px",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },
  content: {
    color: "gray",
    fontSize: "12px",
  },
}));

export default function NestedStylesHook() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        This is red since it is inside the root.
        <p>
          This is green since it is inside the paragraph{" "}
          <span div className={classes.span}>
            and this is blue since it is inside the span
          </span>
        </p>
        <div className={classes.span2}>
          <span className={classes.content}>
            and this is blue since it is inside the span
          </span>
        </div>
      </div>
    </>
  );
}
