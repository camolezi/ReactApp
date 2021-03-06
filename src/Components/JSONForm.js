import React, { useState } from "react";
import LoadingCircle from "../Components/LoadingCircle.js";

/*
This component abstract a basic form with http post json request capabilities
Usage:
  Props:
    id:string
    url:string - url to send the JSON post request
    children - JSX to be renderer inside the forms- buttons and texts inputs etc..
    afterSumbit - callback called when the forms in submitted

*/
function JSONForm(props) {
  const [formState, setFormState] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    console.log(JSON.stringify(formState));

    setSubmitted(true);

    let authHeaders = {};
    if (props.login) {
      authHeaders = {
        Authorization: props.token,
      };
    }

    //submit-form
    fetch(props.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders,
      },
      body: JSON.stringify(formState),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((obj) => {
        setSubmitted(false);
        if (props.afterSubmit) props.afterSubmit(true, obj);

        console.log(obj);
      })
      .catch((error) => {
        setSubmitted(false);
        if (props.afterSubmit) props.afterSubmit(false);
        console.error("Error:", error);
      });
  }

  function changedForm(e) {
    //Update state
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <form id={props.formId} onChange={changedForm} onSubmit={submitForm}>
      {submitted ? <LoadingCircle /> : props.children}
    </form>
  );
}

export default JSONForm;
