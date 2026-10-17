import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const containerStyle = {
    minHeight:"100vh",
     display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    fontFamily: "Arial, sans-serif",
  };
    const cardStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "90%",
  };

  const countStyle = {
    fontSize: "60px",
    color: "#2563eb",
    margin: "25px 0",
  };

  const buttonStyle = {
    padding: "12px 18px",
    margin: "6px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
  };

  const resetStyle = {
    ...buttonStyle,
    backgroundColor: "#dc2626",
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