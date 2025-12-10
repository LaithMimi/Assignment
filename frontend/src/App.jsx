import React, { useState } from "react";
import "./App.css";

function LoadingIndicator({ status }) {
  const isVisible = status === "loading" || status === "success";
  
  return (
    <div className={`loading-container ${isVisible ? "visible" : ""}`}>
      <div className={`loading-bar ${status}`} />
    </div>
  );
}

export default function App() {
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const file = e.target.file.files[0];
    if (!file) { alert("Choose a file"); return; }

    setStatus("loading");
    setMsg("");

    const fd = new FormData();
    fd.append("file", file);

    try {
      // Small delay to make sure the loading state is visible
      await new Promise(r => setTimeout(r, 500)); 

      const res = await fetch("http://localhost:8000/upload", { method: "POST", body: fd });
      if (!res.ok) throw await res.json();
      const json = await res.json();
      
      setStatus("success");
      setMsg(`Uploaded ${json.filename} successfully`);
      alert("Task finished: " + json.filename);
    } catch (err) {
      setStatus("error");
      setMsg(err.detail || err.message || "Upload failed");
      alert("Upload failed: " + (err.detail || err.message || ""));
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>File Upload</h2>
        <p className="subtitle">Select a file to upload to the server</p>
        
        <form onSubmit={onSubmit}>
          <div className="file-input-wrapper">
             <input name="file" type="file" id="file" className="file-input" />
          </div>
          
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Uploading..." : "Upload"}
          </button>
        </form>

        <LoadingIndicator status={status} />
        
        {msg && <p className={`message ${status}`}>{msg}</p>}
      </div>
    </div>
  );
}
