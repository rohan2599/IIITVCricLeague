export const SignUpOwner = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("owner")
          .doc(res.user.uid)
          .set({
            email: newUser.email,
            batch: newUser.batch
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS_OWNER" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_OWNER_ERROR", err });
      });
  };
};

export const SignUpPlayer = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("player")
          .doc(res.user.uid)
          .set({
            email: newUser.email,
            batch: newUser.batch
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS_PLAYER" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_PLAYER_ERROR", err });
      });
  };
};
