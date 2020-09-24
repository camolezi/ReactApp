import React, { useEffect, useState } from "react";
import Post from "../Components/Post.js";
import { useParams } from "react-router-dom";

import { selectPost } from "../Store/Slices/postSlice.js";
import { useSelector } from "react-redux";

import LoadingCircle from "../Components/LoadingCircle.js";

function PostView(props) {
  const { id } = useParams();
  const url = `/post/${id}`;

  const [post, setPost] = useState(null);
  const cachedPost = useSelector(selectPost(id));
  useEffect(() => {
    if (!cachedPost) {
      console.log(cachedPost);
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((err) => console.log("Error in request Json"));
    } else {
      setPost(cachedPost);
    }
  }, [url]);

  if (post) {
    return <Post {...post} />;
  }

  return <LoadingCircle />;
}

export default PostView;
