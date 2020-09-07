import React, { useState } from "react";

//This component abstract a basic form with http post json request capabilities
function PostForm(props) {
  const [formState, setFormState] = useState({});

  function submitForm(e) {
    e.preventDefault();

    console.log(JSON.stringify(formState));

    //submit-form
    fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => {
        console.log("Success:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function changedForm(e) {
    //Update state
    let newState = formState;
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  }

  return (
    <form id={props.formId} onChange={changedForm} onSubmit={submitForm}></form>
  );
}

export default PostForm;
