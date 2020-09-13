import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "./Components/Navbar.js";
import EditPostFloatingButton from "./Components/EditPostFloatingButton.js";

import PostView from "./Views/PostView.js";
import HomePostsView from "./Views/HomePostsView.js";
import SingUpView from "./Views/SignUpView.js";
import CreatePostView from "./Views/CreatePostView.js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <NavBar />
        <div className={classes.offset} />

        <Switch>
          {
            //Application routes
          }

          <Route exact path="/">
            <Redirect to="/post" />
          </Route>

          <Route exact path="/signup">
            <SingUpView />
          </Route>

          <Route exact path="/post/create">
            <CreatePostView />
          </Route>

          <Route exact path="/post">
            <EditPostFloatingButton to="/post/create" />
            <HomePostsView />
          </Route>

          <Route exact path="/post/:id">
            <PostView />
          </Route>

          <Route>Resource not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
