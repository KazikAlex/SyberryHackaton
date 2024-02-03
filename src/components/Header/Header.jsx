import React from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

export default function Header() {
  const [isUserLog, setUserLog] = useState(true);
  const [activeForm, setActiveForm] = useState(false);

  const activeFormHandler = () => {
    setActiveForm(!activeForm);
  }

  return (
    <Container className={styles.header}>
      <header className={styles.header__container}>
      <a href="/" className={styles.logo} >
        <img src="icons/logo.svg" alt="logo"></img>
          <p className={styles.logo_p}>HackaFilm</p>
      </a>
        {isUserLog && (            
          <a href="/user-page" className={styles.favorite}>
            <img
                className={styles.favorite_img}
                src="icons/star-svgrepo-com.svg"
                alt="star"
              ></img>
              <p className={styles.favorite_p}>Favorites film</p>
          </a>
        )}

        <form className={styles.form}>
          <input className={styles.input} type="text" name="" id="" />
          <Button context={"Поиск"} className={styles.header_btn}></Button>
        </form>
        <Button context={"Войти"} className={styles.header_btn}  click={activeFormHandler}></Button>
        {
          activeForm ? <LoginForm /> : null
        }
      </header>
    </Container>
  );
}
