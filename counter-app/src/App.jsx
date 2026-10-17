import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #312e81, #6d28d9)",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    padding: "20px",
    boxSizing: "border-box",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.97)",
    padding: "45px 30px",
    borderRadius: "28px",
    textAlign: "center",
    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
    maxWidth: "480px",
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid rgba(255, 255, 255, 0.5)",
  };

  const countStyle = {
    fontSize: "76px",
    fontWeight: "800",
    color: "#4f46e5",
    margin: "25px 0",
    letterSpacing: "-3px",
    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const buttonStyle = {
    padding: "13px 20px",
    margin: "7px 5px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 5px 12px rgba(79, 70, 229, 0.25)",
    transition: "all 0.2s ease",
  };

  const resetStyle = {
    ...buttonStyle,
    background: "linear-gradient(135deg, #ef4444, #be123c)",
    boxShadow: "0 5px 12px rgba(239, 68, 68, 0.2)",
  };

  const decreaseStyle = {
    ...buttonStyle,
    background: "linear-gradient(135deg, #f59e0b, #ea580c)",
    boxShadow: "0 5px 12px rgba(245, 158, 11, 0.2)",
  };

  const increaseFiveStyle = {
    ...buttonStyle,
    background: "linear-gradient(135deg, #059669, #0d9488)",
    boxShadow: "0 5px 12px rgba(5, 150, 105, 0.2)",
  };

  const decreaseFiveStyle = {
    ...buttonStyle,
    background: "linear-gradient(135deg, #64748b, #334155)",
    boxShadow: "0 5px 12px rgba(51, 65, 85, 0.2)",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>React Counter</h1>

        <h2 style={countStyle}>{count}</h2>

        <div>
          <button
            style={buttonStyle}
            onClick={() => setCount((prev) => prev + 1)}
          >
            Add +1
          </button>

          <button
            style={buttonStyle}
            onClick={() =>
              setCount((prev) => Math.max(0, prev - 1))
            }
          >
            Subtract -1
          </button>
        </div>

        <div>
          <button
            style={resetStyle}
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            style={buttonStyle}
            onClick={() => setCount((prev) => prev + 5)}
          >
            Plus Five +5
          </button>

          <button
            style={buttonStyle}
            onClick={() =>
              setCount((prev) => Math.max(0, prev - 5))
            }
          >
            Minus Five -5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;