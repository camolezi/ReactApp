import React, { useState, useEffect } from "react";

//This hook is used to help with validation with text fields in form

/*
    Usage:

  input:
  validationObject- A object with validation functions as values.
  A validation function is a function that receive a text argument and returns a error message, 
  if the text input is invalid, or a null string if the text input is valid. 
  It is suggested that the keys in the validationObject are the used IDs for the input fields of the forms.

  return:
  Its returned two functions:
  The first one is a function that receives a id input and returns the given error message for a input field
  if there are no errors an empty string is returned

  The second returned function needs to be called in the "onChange" function of all the input fields.

*/

function useFormValidation(validationObject) {
  const [elementsState, setElementsState] = useState({});

  function setElement(id, value) {
    setElementsState({ ...elementsState, [id]: value });
  }

  useEffect(() => {
    Object.keys(validationObject).forEach((id) => {
      setElement(id, "");
    });
  }, []);

  return [
    function (_id) {
      return elementsState[_id];
    },
    function (_id) {
      return (e) => {
        setElement(_id, validationObject[_id](e.target.value));
      };
    },
  ];
}

//This function is just a utility function for creating textField props- Use this only with textField components
function useValidationProps(validationObject) {
  const [formError, onChangeFormError] = useFormValidation(validationObject);

  return (id) => {
    return {
      error:
        /*Empty string will evaluate to false*/
        Boolean(formError(id)),

      helperText: formError(id),

      onChange: (e) => {
        onChangeFormError(id)(e);
      },
    };
  };
}

export { useFormValidation, useValidationProps };
