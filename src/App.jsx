import { useState, useEffect } from "react";

function App() {
  const greetings = [
    "Hello Snehal!",
    "Did I make you proud?",
    "Are you proud of me UwU!",
    "I’ll keep doing better!",
    "You inspire me every day ❤️"
  ];

  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

 
  const mainBgColor = darkMode ? "#333" : "#f4f4f4"; 
  const mainColor = darkMode ? "#fff" : "#000";
  const contentBgColor = darkMode ? "#222" : "#fff";
  const contentColor = darkMode ? "#fff" : "#222";

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleGreetingChange = () => {
    setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
  };

  return (
    <div
      style={{
        backgroundColor: mainBgColor,
        color: mainColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 
        style={{ 
          fontSize: "2rem", 
          marginBottom: "10px", 
          padding: "10px 25px", 
          borderRadius: "12px",
          backgroundColor: contentBgColor, 
          color: contentColor,
          boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
        }}
      >
        {greetings[index]}
      </h1>

      <h2
        key={time}
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          fontFamily: "'Courier New', Courier, monospace",
          margin: "20px 0",
          padding: "10px 25px",
          borderRadius: "12px",
          backgroundColor: contentBgColor, 
          color: contentColor,
          boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
          letterSpacing: "2px",
          transition: "all 0.3s ease",
        }}
      >
        {time}
      </h2>

      <button
        onClick={handleGreetingChange}
        style={{
          margin: "10px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: contentBgColor, 
          color: contentColor, 
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "all 0.2s ease",
        }}
      >
        Change Greeting
      </button>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          margin: "10px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: contentBgColor, 
          color: contentColor,
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "all 0.2s ease",
        }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;