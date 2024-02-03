import React from 'react'
import styles from "./loginForm.module.scss";

export const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <form>
        <label className={styles.label} htmlFor="UserName" >
          UserName
          <input className={styles.input} type="login" />
        </label>
        <label className={styles.label} htmlFor="Password">
          Login
          <input className={styles.input} type="password" />
        </label>
      </form>
    </div>
  )
}

export default LoginForm