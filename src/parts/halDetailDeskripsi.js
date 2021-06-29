import React from "react";
import ReactHtmlParser from "react-html-parser";
import Fade from "react-reveal/Fade";

export default function halDetailDeskripsi({ data }) {
  return (
    <Fade bottom delay={500}>
      <main>
        <h4>Tentang tempat ini</h4>
        {ReactHtmlParser(data.description)}
        <div className="row" style={{ marginTop: 30 }}>
          {/* logic bagian fitur hotel/rumah */}
          {data.features.length === 0
            ? "Tidak Ada Feature"
            : data.features.map((feature, index) => {
                return (
                  <div
                    key={`feature-${index}`}
                    className="col-3 bagian-fitur"
                    style={{ marginBottom: 20 }}
                  >
                    <img
                      width="38"
                      className="d-block mb-2"
                      src={feature.imageUrl}
                      alt={feature.name}
                    />{" "}
                    <span>{feature.qty}</span>{" "}
                    <span className="text-gray-500 font-weight-light">
                      {feature.name}
                    </span>
                  </div>
                );
              })}
        </div>
      </main>
    </Fade>
  );
}
