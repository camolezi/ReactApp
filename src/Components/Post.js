import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardArea: {
    border: "1px solid transparent",
    "&:hover": {
      border: "1px solid gray",
    },
  },
}));

function Post(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea className={classes.cardArea}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {props.title} id: {props.id}
            askjdahsjkdhsstretch
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {props.body.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Post;
