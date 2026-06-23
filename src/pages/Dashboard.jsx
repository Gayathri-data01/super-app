import Weather from "../components/Weather";
import Timer from "../components/Timer";
import News from "../components/News";
import Notes from "../components/Notes";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <div style={{ display: "grid", gap: 20 }}>
        <Weather />
        <Timer />
        <News />
        <Notes />
      </div>

      <button onClick={() => navigate("/movies")}>
        Browse Movies
      </button>
    </div>
  );
}

export default Dashboard;