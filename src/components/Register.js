import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setFormdata } from "../store/formDataSlice";

const Register = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    axios
      .post("https://reqres.in/api/users", {
        data,
      })
      .then((response) => {
        dispatch(setFormdata(response.data));
      });
  };

  return (
    <div className="formbg">
      <div className="formbg-inner padding-horizontal--48">
        <span className="padding-bottom--15">Resgitration Form</span>

        <form id="stripe-login" onSubmit={handleSubmit(onSubmit)}>
          <div className="field padding-bottom--24">
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              name="first"
              id="first"
              {...register("first", {
                required: {
                  value: true,
                  message: "First Name is required",
                },
              })}
            />
            <span style={{ color: "red" }}>{errors.first?.message}</span>
          </div>

          <div className="field padding-bottom--24">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              name="last"
              id="last"
              {...register("last", {
                required: {
                  value: true,
                  message: "Last Name is required",
                },
              })}
            />
            <span style={{ color: "red" }}>{errors.last?.message}</span>
          </div>

          <div className="field padding-bottom--24">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <span style={{ color: "red" }}>{errors.email?.message}</span>
          </div>

          <div className="field padding-bottom--24">
            <div className="grid--50-50">
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            <span style={{ color: "red" }}>{errors.password?.message}</span>
          </div>

          <div className="field padding-bottom--24">
            <div className="grid--50-50">
              <label htmlFor="confirm">Confirm Password</label>
            </div>
            <input
              type="password"
              name="confirm"
              id="confirm"
              {...register("confirm", {
                required: {
                  value: true,
                  message: "Please confirm password",
                },
                validate: (value) =>
                  value == getValues("password") || "password doesn't match",
              })}
            />
            <span style={{ color: "red" }}>{errors.confirm?.message}</span>
          </div>

          <div className="field padding-bottom--24">
            <input type="submit" name="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
