export const handleLoginFormChange = (e) => ({
  type: "LOGIN_FORM_CHANGE",
  payload: {name: e.target.name, value: e.target.value}
})

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})
