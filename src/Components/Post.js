import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  CardHeader,
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

/*
        "id": 46,
        "title": "yep this is a post",
        "createdAt": "2020-09-23T19:06:00.348117Z",
        "userLogin": "admin",
        "body": "this is a post"


*/

function Post(props) {
  const classes = useStyles();
  return (
    <Card className={classes.cardArea}>
      <CardHeader
        title={props.title}
        subheader={
          "posted by " + props.userLogin + "        at " + props.createdAt
        }
      />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
