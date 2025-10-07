import { useState, useEffect } from "react";

function App() {
  const [greeting, setGreeting] = useState("Hello React!");
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#f4f4f4",
        color: darkMode ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{greeting}</h1>
      <h2>Current Time: {time}</h2>
      <button onClick={() => setGreeting(greeting === "Hello React!" ? "Hi, I'm Raunak!" : "Hello React!")}>
        Toggle Greeting
      </button>
      <button onClick={() => setDarkMode(!darkMode)} style={{ marginTop: "10px" }}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
