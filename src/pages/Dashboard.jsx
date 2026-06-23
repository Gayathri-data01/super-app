import Weather from "../components/Weather";
import Timer from "../components/Timer";
import News from "../components/News";
import Notes from "../components/Notes";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const categories =
    JSON.parse(localStorage.getItem("categories")) || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        padding: "30px",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Left Side */}
        <div style={{ display: "grid", gap: "20px" }}>
          {/* Profile */}
          <div style={cardStyle}>
            <h2 style={{ color: "#72db73" }}>{user.name}</h2>
            <p>@{user.username}</p>
            <p>{user.email}</p>
            <p>{user.mobile}</p>

            <div style={{ marginTop: "10px" }}>
              {categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    background: "#148A08",
                    padding: "5px 9px",
                    borderRadius: "16px",
                    marginRight: "8px",
                    display: "inline-block",
                    marginBottom: "8px",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <Weather />
          <Notes />
        </div>

        {/* Right Side */}
        <div style={{ display: "grid", gap: "20px" }}>
          <Timer />
          <News />

          <button
            style={buttonStyle}
            onClick={() => navigate("/movies")}
          >
            Browse Movies
          </button>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#1f1f1f",
  padding: "20px",
  borderRadius: "20px",
};

const buttonStyle = {
  padding: "10px",
  background: "#72db73",
  border: "none",
  borderRadius: "12px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Dashboard;