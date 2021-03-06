import { selectUsername, selectToken } from "../../Store/Slices/loginSlice.js";
import { useSelector } from "react-redux";

//This component is a high order component to http components- it adds the auth headers props to any component.
function WithAuthorization(component) {
  const userLogin = useSelector(selectUsername);
  const userToken = useSelector(selectToken);

  return (props) => {
    return component({ ...props, token: userToken, login: userLogin });
  };
}

export default WithAuthorization;
