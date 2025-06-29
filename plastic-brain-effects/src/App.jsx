import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import BrainImage from "./BrainImage";
import { plasticData } from "./data";

export default function App() {
  const [selectedPlastic, setSelectedPlastic] = useState("PET");
  const { brainArea, highlightRegion, data } = plasticData[selectedPlastic];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
        🧠 Plastic & Brain Effects Visualizer
      </h1>

      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <label style={{ fontSize: "1.2rem", marginRight: "1rem" }}>Select Plastic Type:</label>
        <select value={selectedPlastic} onChange={(e) => setSelectedPlastic(e.target.value)} style={{ padding: "0.5rem" }}>
          {Object.keys(plasticData).map((plastic) => (
            <option key={plastic} value={plastic}>
              {plastic}
            </option>
          ))}
        </select>
      </div>

      <div style={{ backgroundColor: "#fff", borderRadius: "1rem", padding: "1rem", marginBottom: "2rem", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🧠 Affected Brain Area</h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>{brainArea}</p>
        <BrainImage region={highlightRegion} />
      </div>

      <div style={{ backgroundColor: "#fff", borderRadius: "1rem", padding: "1rem", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>📊 Distribution of Plastic</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="compartment" />
            <YAxis domain={[0, 100]} unit="%" />
            <Tooltip />
            <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
