import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Action", color: "#FF5209" },
  { name: "Drama", color: "#D7A4FF" },
  { name: "Comedy", color: "#148A08" },
  { name: "Horror", color: "#7358FF" },
  { name: "Sci-Fi", color: "#84C2FF" },
  { name: "Romance", color: "#FF4ADE" },
  { name: "Music", color: "#E61E32" },
  { name: "Sports", color: "#6CD061" },
  { name: "Anime", color: "#FF6B6B" },
];

function Categories() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const toggle = (cat) => {
    if (selected.includes(cat)) {
      setSelected(selected.filter((x) => x !== cat));
    } else {
      setSelected([...selected, cat]);
    }
  };

  const proceed = () => {
    if (selected.length < 3) {
      alert("Select at least 3 categories");
      return;
    }

    localStorage.setItem("categories", JSON.stringify(selected));
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        display: "flex",
        padding: "40px",
      }}
    >
      {/* Left Panel */}
      <div style={{ width: "35%", paddingRight: "30px" }}>
        <h1 style={{ color: "#72db73", fontSize: "60px" }}>
          Super App
        </h1>

        <h2 style={{ fontSize: "40px" }}>
          Choose your entertainment category
        </h2>

        <div style={{ marginTop: "20px" }}>
          {selected.map((item) => (
            <span
              key={item}
              style={{
                background: "#148A08",
                padding: "10px 16px",
                borderRadius: "20px",
                margin: "6px",
                display: "inline-block",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <button style={buttonStyle} onClick={proceed}>
          Continue
        </button>
      </div>

      {/* Right Panel */}
      <div
        style={{
          width: "65%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => toggle(cat.name)}
            style={{
              background: cat.color,
              height: "150px",
              borderRadius: "20px",
              padding: "20px",
              cursor: "pointer",
              border: selected.includes(cat.name)
                ? "4px solid white"
                : "none",
              fontSize: "24px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "end",
            }}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
}

const buttonStyle = {
  marginTop: "40px",
  padding: "16px 40px",
  background: "#148A08",
  color: "white",
  border: "none",
  borderRadius: "30px",
  fontSize: "18px",
  cursor: "pointer",
};

export default Categories;