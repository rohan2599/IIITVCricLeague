export const SignUpOwner = owner => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("owner")
      .add({
        ...owner,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS_OWNER", owner });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_OWNER_ERROR", err });
      });
  };
};

export const SignUpPlayer = player => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("player")
      .add({
        ...player,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS_PLAYER", player });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_PLAYER_ERROR", err });
      });
  };
};
