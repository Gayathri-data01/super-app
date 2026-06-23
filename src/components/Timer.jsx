import { useState, useEffect } from "react";

function Timer() {
  const [sec, setSec] = useState(60);

  useEffect(() => {
    if (sec <= 0) {
      alert("Time up!");
      return;
    }

    const t = setTimeout(() => setSec(sec - 1), 1000);
    return () => clearTimeout(t);
  }, [sec]);

  return (
    <div style={cardStyle}>
      <h2>Timer</h2>
      <h1>{sec}s</h1>

      <button
        onClick={() => setSec(60)}
        style={buttonStyle}
      >
        Reset
      </button>
    </div>
  );
}

const cardStyle = {
  background: "#1f1f1f",
  padding: "20px",
  borderRadius: "20px",
  color: "white",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "10px",
  background: "#72db73",
  fontWeight: "bold",
};

export default Timer;