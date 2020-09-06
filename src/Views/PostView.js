import React, { useEffect, useState } from "react";
import Post from "../Components/Post.js";
import { useParams } from "react-router-dom";

function PostView(props) {
  let { id } = useParams();
  let url = `/post/${id}`;
  let returnJSX;

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((err) => console.log("Error in request Json"));
  }, [url]);

  if (post) {
    returnJSX = <Post id={id} title={post.title} body={post.body} />;
  } else {
    //Can put a load image here
    returnJSX = <h1>Loading</h1>;
  }

  return returnJSX;
}

export default PostView;
