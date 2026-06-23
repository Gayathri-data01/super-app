import { useState } from "react";

function Notes() {
  const [note, setNote] = useState("");

  return (
    <div style={{ background:"#333", padding:20 }}>
      <h2>Notes</h2>
      <textarea
        rows="5"
        cols="40"
        value={note}
        onChange={(e)=>setNote(e.target.value)}
      />
    </div>
  );
}

export default Notes;