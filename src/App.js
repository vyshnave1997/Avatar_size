// src/App.js
import React from "react";
import AvatarForm from "./AvatarForm";
import "./AvatarForm.css"; // Import CSS for form styling

const App = () => {
  return (
    <div
      className="App"
      style={{ padding: "20px", backgroundColor: "#121212", color: "#fff" }}
    >
      <AvatarForm />
    </div>
  );
};

export default App;
