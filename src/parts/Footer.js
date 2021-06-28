import React from "react";

import Button from "elements/Button";
import IconText from "parts/iconText";
export default function Footer() {
  return (
    <footer>
      <div className="container mb-5">
        <div className="row">
          <div className="col align-item-center" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              Sanscation, Cara paling asik buat lo kalo lagi pengen Sans.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Panduan</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Reservasi
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Pembayaran
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Penggunaan
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Jelajahi Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Tentang Kami
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privasi
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Syarat & Ketentuan
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Hubungi Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@sanscation.id"
                >
                  support@sanscation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622122081996">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Tangerang, Banten</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col text-center copyrights">
          Copyright 2021 • All rights reserved • Randy Farhan
        </div>
      </div>
    </footer>
  );
}
