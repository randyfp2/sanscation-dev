import React from "react";
import Fade from "react-reveal/Fade";
import { InputText } from "elements/Form";
import formatNumber from "utils/formatNumber";

export default function bookInfo(props) {
  const { data, ItemDetails, checkout } = props;
  console.log(ItemDetails);

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    className="img-cover"
                    src={ItemDetails.imageUrls[0].url}
                    alt={ItemDetails.name}
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.name}</h5>
                      <span className="text-gray-500">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto desc-harga">
                    <span>
                      IDR {formatNumber(+checkout.duration * ItemDetails.price)}
                      <span className="text-gray-500 text-weight-300 per-malam">
                        {" "}
                        / {checkout.duration} {ItemDetails.unit}
                        {+checkout.duration > 1 ? "" : ""}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div
            className="col-5 py-5 checkout-container"
            style={{ paddingLeft: 80 }}
          >
            <Fade delay={600}>
              <label htmlFor="firstName">Nama Depan</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastName">Nama Belakang</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email Aktif</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Nomor Handphne</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
