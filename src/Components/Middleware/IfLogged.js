import React from "react";

//This component is a high order component. If user is logged the passed component will render normaly.
//If user is not logged in, the component will not render.
import { selectUsername } from "../../Store/Slices/loginSlice.js";
import { useSelector } from "react-redux";

function WithIsLogged(component) {
  const isLogged = Boolean(useSelector(selectUsername));

  if (isLogged) {
    return (props) => {
      return component(props);
    };
  }

  return (props) => {
    return <></>;
  };
}

export default WithIsLogged;
