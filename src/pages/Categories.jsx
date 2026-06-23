import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Action",
  "Drama",
  "Comedy",
  "Horror",
  "Sci-Fi",
  "Romance",
  "Music",
  "Sports",
  "Anime"
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
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Select 3 Categories</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => toggle(cat)}
            style={{
              padding: 30,
              margin: 10,
              cursor: "pointer",
              background: selected.includes(cat)
                ? "#72db73"
                : "#333",
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      <button onClick={proceed}>Continue</button>
    </div>
  );
}

export default Categories;