import React from "react";
import Fade from "react-reveal/Fade";

export default function Meta({ data, current }) {
  return (
    <Fade delay={300}>
      <div className="text-center checkout-text" style={{ marginBottom: 30 }}>
        <h2>{data[current] && data[current].title}</h2>
        <p className="lead text-gray-500">
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
}
