import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({ startOnLoad: false, theme: "dark"});

const Mermaid = ({ chart }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      try {
        mermaid.contentLoaded();
        mermaid.parse(chart); // Verify syntax first
        mermaid.run(undefined, chartRef.current); // Initialize and render chart
      } catch (err) {
        console.error("Mermaid error:", err);
      }
    }
  }, [chart]);

  return <div ref={chartRef} className="mermaid">{chart}</div>;
};

export default Mermaid;
