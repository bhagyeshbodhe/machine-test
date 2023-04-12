import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("https://reqres.in/api/login", data)
      .then((response) => {
        if (response.data.token) {
          navigate("/welcome");
        }
      })
      .catch((err) => {
        if (err) {
          alert("Please enter correct email and password");
        }
      });
  };

  return (
    <div className="formbg">
      <div className="formbg-inner padding-horizontal--48">
        <span className="padding-bottom--15">Sign in to your account</span>

        <form id="stripe-login" onSubmit={handleSubmit(onSubmit)}>
          <div className="field padding-bottom--24">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email")}
            />
          </div>

          <div className="field padding-bottom--24">
            <div className="grid--50-50">
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password")}
            />
          </div>

          <div className="field padding-bottom--24">
            <input type="submit" name="submit" value="Log In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
