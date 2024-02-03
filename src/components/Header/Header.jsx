import React from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useGetSearchByKeywordFilmsQuery } from '../../services/base-api';

export default function Header() {
  const [isUserLog, setUserLog] = useState(true);
  const [activeForm, setActiveForm] = useState(false);

  const [search, setSearch] = useState("");
  const { data: dataSearch } = useGetSearchByKeywordFilmsQuery({
    keyword: search,
  });
  const onChangeHandler = (e) => {
    setSearch(e.currentTarget.value);
  };

  const activeFormHandler = () => {
    setActiveForm(!activeForm);
  };

  console.log(dataSearch);
  return (
    <Container className={styles.header}>
      <header className={styles.header__container}>
        <a href="/" className={styles.logo} id="/">
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
          {" "}
          <input
            className={styles.input}
            type="text"
            value={search}
            onChange={onChangeHandler}
          />
          {search && <ul className={styles.ul}>
            {dataSearch?.films.map((item) => <li>
              <p>{item.nameRu}</p>
            </li> )}</ul>}
          {/* {JSON.stringify(dataSearch)}
          <div>
            <ul>
            {dataSearch?.items.map(item => (
              // <li><p>{item.keyword}</p></li>
            ))}
            </ul>
            </div> */}
        </form>
        <Button
          context={"Войти"}
          className={styles.header_btn}
          click={activeFormHandler}
        ></Button>
        {activeForm ? <LoginForm /> : null}
      </header>
    </Container>
  );
}
