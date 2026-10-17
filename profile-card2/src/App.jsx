
import React from "react";


const students = [
  { id: 1, name: "Hameedah", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Hameedah&hair=long01,long02,long03" },
  { id: 2, name: "Peace", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Peace&hair=long01,long02,long03" },
  { id: 3, name: "Roqeeb", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Roqeeb&hair=short01,short02,short03" },
  { id: 4, name: "Saheed", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Saheed&hair=short01,short02,short03" },
  { id: 5, name: "Hafeez", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Hafeez&hair=short01,short02,short03" },
  { id: 6, name: "Ibrahim", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ibrahim&hair=short01,short02,short03" },
  { id: 7, name: "Mitchell", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Mitchell&hair=short01,short02,short03" },
  { id: 8, name: "Israel", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Israel&hair=short01,short02,short03" },
  { id: 9, name: "Pelumi", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Pelumi&hair=short01,short02,short03" },
  { id: 10, name: "Ridwaan", role: "Frontend Developer", avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ridwaan&hair=short01,short02,short03" },
];

function App() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "25px",
    padding: "35px",
    background: "#f5f7ff",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    background: "white",
    padding: "25px 20px",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(40, 50, 100, 0.08)",
    border: "1px solid #e8eaff",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #6366f1, #9333ea)",
    color: "white",
    padding: "11px 22px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "12px",
  };

  return (
    <div>
      <header
        style={{
          background: "linear-gradient(120deg, #312e81, #6366f1, #a855f7)",
          color: "white",
          textAlign: "center",
          padding: "45px 20px",
        }}
      >
        <p style={{ letterSpacing: "3px", fontSize: "12px" }}>
          S-PASSION ACADEMY
        </p>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Meet the Team
        </h1>
        <p>Ten creative minds, one journey into web development.</p>
      </header>

      <main style={containerStyle}>
        {students.map((student) => (
          <div key={student.id} style={cardStyle}>
            <div
              style={{
                backgroundColor: student.color,
                borderRadius: "14px",
                padding: "18px",
                marginBottom: "18px",
              }}
            >
              <img
                src={student.avatar}
                alt={`Avatar of ${student.name}`}
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  border: "4px solid white",
                }}
              />
            </div>

            <p
              style={{
                color: "#6366f1",
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              STUDENT {String(student.id).padStart(2, "0")}
            </p>

            <h2 style={{ color: "#1e1b4b", margin: "10px 0" }}>
              {student.name}
            </h2>

            <p style={{ color: "#64748b", fontSize: "14px" }}>
              {student.role}
            </p>

            <button
              style={buttonStyle}
              onClick={() =>
                alert(
                  `Hi, I am ${student.name}. I am a web development student at S-Passion Academy, working towards becoming a certified developer.`
                )
              }
            >
              View Profile →
            </button>
          </div>
        ))}
      </main>

      <footer
        style={{
          backgroundColor: "#1e1b4b",
          color: "#e0e7ff",
          textAlign: "center",
          padding: "22px",
        }}
      >
        <p>© 2026 S-Passion Academy | Growing Together Through Code</p>
      </footer>
    </div>
  );
}

export default App;
