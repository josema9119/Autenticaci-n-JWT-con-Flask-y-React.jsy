import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  const sendUserInfo = async () => {
    const response = await fetch(
      "https://3001-josema9119-autenticacin-r82xzq5xdxh.ws-eu44.gitpod.io/api/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    if (data.created) {
      history.push("/login");
    }
    console.log(data);
  };

  return (
    <div className="text-center mt-5">
      <div className="row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="col-3 m-auto"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="col-3 m-auto"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
      </div>
      <button className="mt-4" onClick={() => sendUserInfo()}>
        Register new user
      </button>
    </div>
  );
};
