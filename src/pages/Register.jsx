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

  const [errors, setErrors] = useState({});

  const submit = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    localStorage.setItem("user", JSON.stringify(form));
    navigate("/categories");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#000" }}>
      {/* Left */}
      <div
        style={{
          width: "50%",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#72db73",
            fontSize: "64px",
            marginBottom: "20px",
          }}
        >
          Super App
        </h1>

        <h2 style={{ color: "white", marginBottom: "20px" }}>
          Create your account
        </h2>

        <input
          placeholder="Name"
          style={inputStyle}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p style={errorStyle}>{errors.name}</p>}

        <input
          placeholder="Username"
          style={inputStyle}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        {errors.username && <p style={errorStyle}>{errors.username}</p>}

        <input
          placeholder="Email"
          style={inputStyle}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}

        <input
          placeholder="Mobile"
          style={inputStyle}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        {errors.mobile && <p style={errorStyle}>{errors.mobile}</p>}

        <button style={buttonStyle} onClick={submit}>
          Sign Up
        </button>
      </div>

      {/* Right */}
      <div
        style={{
          width: "50%",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "end",
          padding: "40px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        ></div>

        <h2
          style={{
            color: "white",
            fontSize: "42px",
            zIndex: 1,
            maxWidth: "500px",
          }}
        >
          Discover New Entertainment
        </h2>
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "80%",
  padding: "16px",
  marginTop: "12px",
  background: "#292929",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "12px",
};

const buttonStyle = {
  padding: "16px",
  width: "85%",
  marginTop: "20px",
  background: "#72db73",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "12px",
  cursor: "pointer",
};

const errorStyle = {
  color: "#ff4d4d",
  margin: "5px 0 0 0",
  fontSize: "14px",
};

export default Register;