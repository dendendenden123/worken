import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const submit = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      form
    );

    console.log("login endpoint", res)

    localStorage.setItem("token", res.data.token);

    navigate("/dashboard");

  };

  return (

    <div>

      <h2>Login</h2>

      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input placeholder="Password"
        type="password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={submit}>Login</button>
      <button onClick={()=> navigate("/register")}>Register</button>

    </div>

  );
}