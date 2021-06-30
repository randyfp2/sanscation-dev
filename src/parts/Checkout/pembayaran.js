import React from "react";
import Fade from "react-reveal/Fade";
import logoBank from "assets/images/LogoBank.png";
import { InputText, InputFile } from "elements/Form";
import formatNumber from "utils/formatNumber";
export default function pembayaran(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div
            className="col-5 border-right py-5 style-transfer"
            style={{ paddingRight: 80 }}
          >
            <Fade delay={300}>
              <p className="mb-4 judul">Transfer Pembayaran:</p>
              <p>Pajak : {tax}%</p>
              <p>Sub total : IDR {formatNumber(subTotal)} </p>
              <p>
                Total :{" "}
                <span className="total-harga">
                  IDR {formatNumber(grandTotal)}
                </span>
              </p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBank} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>
                      <span className="font-weight-bold">Bank Sample</span>
                    </dd>
                    <dd>2208 1996</dd>
                    <dd>PT.SANTAY VACATION</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoBank} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>
                      <span className="font-weight-bold">Bank Bersama</span>
                    </dd>
                    <dd>2208 1996</dd>
                    <dd>PT.SANTAY VACATION</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div
            className="col-5 py-auto checkout-container"
            style={{ paddingLeft: 80 }}
          >
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank Kamu</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
