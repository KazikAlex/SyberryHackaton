import React from 'react'

export const LoginForm = () => {
  return (
    <div className='loginForm'>
      <form>
        <label htmlFor="UserName">
          <input type="login" />
        </label>
        <label htmlFor="Password">
          <input type="password" />
        </label>
      </form>
    </div>
  )
}

export default LoginForm