import React, { useEffect, useState } from "react";
import Post from "../Components/Post.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "30px",
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

  let url = `/post/`;
  let returnJSX;

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log("Error in request Json"));
  }, [url]);

  //Posts loaded
  if (posts) {
    let postsComponents = posts.map((post) => (
      <Grid item className={classes.card} zeroMinWidth xs={12} sm={10} md={7}>
        <Link to={`post/${post.id}`} className={classes.link}>
          <Post id={post.id} title={post.title} body={post.body} />
        </Link>
      </Grid>
    ));

    //Just for testing
    postsComponents.forEach((element) => {
      postsComponents.push(element);
      postsComponents.push(element);
    });

    returnJSX = (
      <div className={classes.root}>
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
      </div>
    );
  } else {
    //Can put a load image here
    returnJSX = <h1>Loading</h1>;
  }
  return returnJSX;
}

export default HomePostsView;
