import React, { useRef } from "react";
import styles from "./loginForm.module.scss";

export const LoginForm = () => {
  const loginRef = useRef();
  const passwordRef = useRef();

  return (
    <div className={styles.loginForm}>
      <form>
        <label className={styles.label} htmlFor="UserName">
          User Name
          <input className={styles.input} type="login" ref={loginRef} />
        </label>
        <label className={styles.label} htmlFor="Password">
          Password
          <input className={styles.input} type="password" ref={passwordRef} />
        </label>
        <input type="submit" value="Login" className={styles.button} />
      </form>
    </div>
  );
};

export default LoginForm;
