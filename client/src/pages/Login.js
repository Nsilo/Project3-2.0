import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./pages.css";

const Login = () => {
  const [form, setForm] = useState();
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLogInForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user/login", form);

      if (!data.user.confirmed) {
        history.push("/confirm");
      } else {
        setUserData({
          token: data.token,
          user: data.user,
        });

        localStorage.setItem("auth-token", data.token);
        history.push("/profile");
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    if (userData.user) history.push("/profile");
  }, [userData.user, history]);

  return (
    <div className="loginBody">
      <form className="loginForm" onSubmit={submitLogInForm}>
        <h1 className="loginHeader">Login</h1>
        <input
          className="loginInput"
          onChange={onChange}
          type="text"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          className="loginInput"
          onChange={onChange}
          type="text"
          name="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
