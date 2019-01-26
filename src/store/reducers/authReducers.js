const initState = {
  authError: null
};

const Authreducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default Authreducer;
