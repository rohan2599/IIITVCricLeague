const initState = {
  authError: null
};

const Authreducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS_OWNER":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_OWNER_ERROR":
      return {
        ...state,
        authError: action.err.message
      };
    case "SIGNUP_SUCCESS_PLAYER":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_PLAYER_ERROR":
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default Authreducer;
