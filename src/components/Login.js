import React from 'react'
import { connect } from 'react-redux'
import { handleLoginFormChange } from '../redux/userActionCreators'

const Login = (props) => {

  const { username, password, passwordConfirmation, handleLoginFormChange } = props

  return(
    <form onSubmit={ console.log }>
    <label>
      Username:
      <input type="text" name="username" value={username} onChange={handleLoginFormChange} />
    </label><br/>
    <label>
      Password:
      <input type="password" name="password" value={password} onChange={handleLoginFormChange} />
    </label><br/>
    {/* {signup &&
      <>
        <label>
          Password Confirmation:
          <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLoginFormChange} />
        </label>
      </>
    } */}
    <br/>
    <input type="submit" value="Submit" />
  </form>
  )
}

const mapStateToProps = (state) => ({
  form: state.user.loginForm
})


export default connect(mapStateToProps, {handleLoginFormChange})(Login)
