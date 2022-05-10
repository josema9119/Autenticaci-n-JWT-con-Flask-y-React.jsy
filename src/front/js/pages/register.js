import React from "react";

export const Register = () => {
  return (
    <div className="tet-center mt-5">
      <div className="row">
        <label htmlFor="email">Email</label>
        <input id="email"></input>
        <label htmlFor="password">Password</label>
        <input id="password"></input>
      </div>
      <button>Register new user</button>
    </div>
  );
};
