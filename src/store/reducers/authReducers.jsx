const initState = {
  player: [{ name: "Shubham", batch: "2016", rank: "Silver" }],
  owner: [{ name: "Nikhil", batch: "2018", rank: "Gold" }]
};

const Authreducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS_OWNER":
      return state;
    case "SIGNUP_OWNER_ERROR":
      return state;
    case "SIGNUP_SUCCESS_PLAYER":
      return state;
    case "SIGNUP_PLAYER_ERROR":
      return state;
    default:
      return state;
  }
};

export default Authreducer;
