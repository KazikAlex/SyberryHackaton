import React, { useState, useEffect } from "react";
import "./UserPage.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";

export default function UserPage() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify({ email: 'user@gmail.com', password: 12345678 }));
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) setUserData(userData);
        console.log(userData);
    }, []);

  return (
    <div className="user-page-container">
      <div className="user-info">
        <div className="user-info__photo">
          <PersonIcon className="user-icon" />
        </div>
        <p>Email: {userData.email} </p>
        <p>Password: {userData.password} </p>
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={() => {
            localStorage.removeItem("userData");
        }}>
          Log Out
        </Button>
      </div>
      <div className="user-favourites">Some favourites</div>
      <div className="user-visited-movies">Visited movies</div>
    </div>
  );
}
