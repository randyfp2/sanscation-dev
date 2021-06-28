import React from "react";
import IcKamera from "assets/images/icKamera.png";
import IcLokasi from "assets/images/icLokasi.png";
import IcKoper from "assets/images/icKoper.png";
import HBanner from "assets/images/hBanner.png";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-item-center">
        {/* Kolom Kiri  */}
        <div className="col-auto" style={{ width: 570 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            {/* line-height-1 bikin lagi css nya , karena bootstrap gak menyediakan */}
            Hilangkan jenuhmu, <br />
            mulailah liburan bersama <br />
            kerabat terdekatmu.
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-45 mr-5"
            style={{ lineHeight: "170%" }}
          >
            Kami menyediakan layanan yang kamu butuhkan untuk menikmati liburan
            bersama keluarga dan teman kamu. Tunggu apa lagi, waktunya untuk
            mengabadikan momen terbaik bersama Sanscation.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Lihat Detail
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 30 }}>
              <img
                width="40"
                height="50"
                src={IcKoper}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  traveler
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 30 }}>
              <img
                width="50"
                height="50"
                src={IcKamera}
                alt={`${props.data.treasures} Photospot`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Photospot
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="50"
                height="50"
                src={IcLokasi}
                alt={`${props.data.cities} Kota`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">Kota</span>
              </h6>
            </div>
          </div>
        </div>
        {/* Kolom kanan / Bagian Gambar Banner */}
        <div className="col-6 pl-3">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={HBanner}
              alt="Hero Banner Image"
              className="img-fluid position-absolute"
              // style={{ margin: "-30px -30px -30px -30px", zIndex: 1 }}
            />
            {/* <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
