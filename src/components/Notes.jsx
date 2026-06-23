import { useState } from "react";

function Notes() {
  const [note, setNote] = useState(
    localStorage.getItem("note") || ""
  );

  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem("note", e.target.value);
  };

  return (
    <div style={cardStyle}>
      <h2>Notes</h2>

      <textarea
        rows="6"
        value={note}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "12px",
          background: "#333",
          color: "white",
          border: "none",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

const cardStyle = {
  background: "#1f1f1f",
  padding: "20px",
  borderRadius: "20px",
  color: "white",
};

export default Notes;