import { useState, useEffect } from "react";

function Timer() {
  const [sec, setSec] = useState(60);

  useEffect(() => {
    if (sec <= 0) return;
    const t = setTimeout(() => setSec(sec - 1), 1000);
    return () => clearTimeout(t);
  }, [sec]);

  return (
    <div style={{ background:"#333", padding:20 }}>
      <h2>Timer</h2>
      <p>{sec}</p>
    </div>
  );
}
export default Timer;