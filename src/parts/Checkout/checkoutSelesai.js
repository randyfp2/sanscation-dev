import React from "react";

import CompletedIllustration from "assets/images/completed.png";
import Fade from "react-reveal/Fade";

export default function checkoutSelesai() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-5 desc-sukses">
            <img
              src={CompletedIllustration}
              className="pb-5 selesai-img"
              alt="completed checkout"
            />
            <p className="text-gray-500 font-weight-light ">
              Kami akan memverifikasi pembayaran anda, ditunggu email konfirmasi
              pembayaran dari kami yaa.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
