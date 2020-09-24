import React, { useEffect, useState } from "react";
import Post from "../Components/Post.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import LoadingCircle from "../Components/LoadingCircle.js";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPost,
  selectFetchStatus,
  selectPosts,
} from "../Store/Slices/postSlice.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "2em",
    background: "white",
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    outlineStyle: "none",
  },
  itemGrid: {
    boxSizing: "border-box",
  },
}));

function HomePostsView(props) {
  const classes = useStyles();
  const url = `/post/`;
  const dispatch = useDispatch();

  const fetchStatus = useSelector(selectFetchStatus);
  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchPost());
    }
  }, [url]);

  const posts = useSelector(selectPosts);
  //Posts loaded
  if (fetchStatus === "ok") {
    let postsComponents = posts.map((post) => (
      <Grid key={post.id} item className={classes.card} zeroMinWidth xs={12}>
        <Link to={`post/${post.id}`} className={classes.link}>
          <Post {...post} />
        </Link>
      </Grid>
    ));

    return (
      <Container className={classes.root} maxWidth="md">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          alignContent="center"
          spacing={2}
          className={classes.itemGrid}
        >
          {postsComponents}
        </Grid>
      </Container>
    );
  }
  return <LoadingCircle />;
}

export default HomePostsView;
