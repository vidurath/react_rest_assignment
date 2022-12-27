import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();

  async function loginUser(credentials) {
    return fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });

    if ("token" in response) {
      alert("Successfully logged In");
      localStorage.setItem("token", response["token"]);
      localStorage.setItem("email", email);
      window.location.href = "/search";
    } else {
      alert(response.error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <br />
      <div className="col-sm-4 offset-sm-3">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
