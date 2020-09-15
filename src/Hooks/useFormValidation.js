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
  Its returned two values:
  The first one is a object associating a the providaded id input and a given error message for a input field
  if there are no errors an empty string is returned

  The second returned value is a function that needs to be called in the "onChange" function of all the input fields.

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
    elementsState,
    function (_id) {
      return (e) => {
        setElement(_id, validationObject[_id](e.target.value));
      };
    },
  ];
}

//This function is just a utility function for creating validation in forms- Use this only with textField and button components
//The first returned value is a object containing the props for TextField components, and the second the props for a button.
function useValidationPropsTextField(validationObject) {
  const [formError, onChangeFormError] = useFormValidation(validationObject);

  function checkButtonState() {
    let errors = "";
    //Concatenate all strings
    Object.keys(formError).forEach((id) => {
      errors += formError[id];
    });
    return Boolean(errors);
  }

  return [
    (id) => {
      return {
        /*Empty string will evaluate to false*/
        error: Boolean(formError[id]),

        helperText: formError[id],

        onChange: (e) => {
          onChangeFormError(id)(e);
        },
      };
    },
    { disabled: checkButtonState() },
  ];
}

export { useFormValidation, useValidationPropsTextField };
