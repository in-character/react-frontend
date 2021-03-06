const initialLoginForm = {
  username: "",
  password: "",
  passwordConfirmation: ""
}

const initialState = {
  user: {
    id: null,
    username: null,
  },
  signup: false,
  loginForm: initialLoginForm
}

const userReducer = (state=initialState, action) => {
  switch (action.type){
    case "TOGGLE_SIGNUP":
      return {...state, signup: !state.signup}
    case "LOGIN_FORM_CHANGE":
      return {...state, loginForm: {
        ...state.loginForm,
        [action.payload.name]: action.payload.value
      }}
    // case "SET_USER":
    //   return {...state, ...action.payload.user}
    case "LOGOUT":
      return {...state, username: null, id: null}
    default:
      return {...state}
  }
}

export default userReducer
