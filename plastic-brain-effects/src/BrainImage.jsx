import React from "react";

const regionStyles = {
  prefrontal: { top: "20%", left: "42%" },
  amygdala: { top: "58%", left: "48%" },
  hippocampus: { top: "62%", left: "44%" },
  temporal: { top: "68%", left: "58%" },
  cerebellum: { top: "78%", left: "38%" },
  occipital: { top: "38%", left: "66%" },
};

export default function BrainImage({ region }) {
  const regions = Object.keys(regionStyles);

  return (
    <div className="relative h-72 w-full mb-6">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Human_brain_lateral_view.svg/800px-Human_brain_lateral_view.svg.png"
        alt="Brain Outline"
        className="absolute w-full h-full object-contain"
      />
      {regions.map((r) => (
        <div
          key={r}
          className={\`absolute rounded-full bg-purple-600 transition-opacity duration-300 \${region === r ? "opacity-80" : "opacity-0"}\`}
          style={{
            width: "40px",
            height: "40px",
            ...regionStyles[r],
          }}
        />
      ))}
    </div>
  );
}
