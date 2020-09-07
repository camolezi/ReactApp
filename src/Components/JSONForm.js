import React, { useState } from "react";

/*
This component abstract a basic form with http post json request capabilities
Usage:
  Props:
    id:string
    url:string - url to send the JSON post request
    children - JSX to be renderer inside the forms- buttons and texts inputs etc..

*/
function JSONForm(props) {
  const [formState, setFormState] = useState({});

  function submitForm(e) {
    e.preventDefault();

    console.log(JSON.stringify(formState));

    //submit-form
    fetch(props.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(text);
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
    <form id={props.formId} onChange={changedForm} onSubmit={submitForm}>
      {props.children}
    </form>
  );
}

export default JSONForm;
