import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="intro-container">
      <h1 className="intro-heading">📝 To-Do-List</h1>
      <p className="intro-subheading">
        Your minimal & efficient space to write, track, and clear your tasks or thoughts.
      </p>
      <ul className="intro-list">
        <li><strong>✨ Add:</strong> Type your note title and content, then hit "Add".</li>
        <li><strong>🗑️ Delete:</strong> Click "DELETE" when a task is done.</li>
      </ul>
      <p className="intro-footer">
        Start now and make progress, one note at a time.
      </p>
    </div>
  );
}

export default Intro;
