import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const submit = () => {
    if (
      !form.name ||
      !form.username ||
      !form.email ||
      !form.mobile
    ) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    navigate("/categories");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: "50%", padding: "60px" }}>
        <h1 style={{ color: "#72db73", fontSize: "50px" }}>Super App</h1>
        <h2>Create your account</h2>

        <input placeholder="Name" style={inputStyle}
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />
        <input placeholder="Username" style={inputStyle}
          onChange={(e)=>setForm({...form,username:e.target.value})}
        />
        <input placeholder="Email" style={inputStyle}
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />
        <input placeholder="Mobile" style={inputStyle}
          onChange={(e)=>setForm({...form,mobile:e.target.value})}
        />

        <button style={buttonStyle} onClick={submit}>
          Sign Up
        </button>
      </div>

      <div
        style={{
          width: "50%",
          background:
            "linear-gradient(to right, #222, #444)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
      >
        Discover New Entertainment
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "80%",
  padding: "14px",
  margin: "14px 0",
  background: "#333",
  color: "white",
  border: "none",
};

const buttonStyle = {
  padding: "15px",
  width: "85%",
  background: "#72db73",
  border: "none",
  fontWeight: "bold",
};

export default Register;