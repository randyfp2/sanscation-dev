import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";

export default function testimoni({ data }) {
  return (
    <section className="container pt-5">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 60 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 0px` }}>
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 1 }}
            />
            {/* <img
              src={TestimonyAccent}
              alt="Testimonial frame"
              className="position-absolute"
              style={{ margin: `-30px 0 0 -30px` }}
            /> */}
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <p className="h5 font-weight-light line-height-2 my-3">
            {data.content}
          </p>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>

          <div>
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Baca Ceritanya
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <Star value={4.3} height={40} width={40} spacing={5}></Star> */
}
