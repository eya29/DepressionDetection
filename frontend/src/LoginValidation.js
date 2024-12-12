// LoginValidation.js
const LoginValidation = (values) => {
    let errors = {};
  
    // Validate email
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
  
    // Validate password
    if (!values.password) {
      errors.password = "Password is required";
    }
  
    return errors;
  };
  
  export default LoginValidation;
  