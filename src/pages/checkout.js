import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import { connect } from "react-redux";
import DetailsPageJSON from "json/itemDetails";

import Header from "parts/header";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/CheckoutStep";

import BookingInformation from "parts/Checkout/bookInfo";
import Payment from "parts/Checkout/pembayaran";
import Completed from "parts/Checkout/checkoutSelesai";

// import { submitBooking } from "store/actions/checkout";

export default class checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Sanscation | Pembayaran";
  }

  render() {
    const { data } = this.state;
    const checkout = {
      duration: 2,
    };
    const steps = {
      BookingInformation: {
        title: "Informasi Reservasi",
        description: "Mohon isi data dibawah ini",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={DetailsPageJSON}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Pembayaran",
        description: "Ikuti langkah-langkah di bawah ini",
        content: (
          <Payment
            data={data}
            ItemDetails={DetailsPageJSON}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yeay ! Waktunya Liburan :D",
        description: null,
        content: <Completed />,
      },
    };
    // const { checkout, page } = this.props;
    return (
      <>
        <Header isCentered isDisabled />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              ></Numbering>
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "BookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Lanjutkan Reservasi
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${DetailsPageJSON._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}{" "}
              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Selesaikan Reservasi
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn btn-balik"
                    type="link"
                    isBlock
                    hasShadow
                    href=""
                  >
                    Halaman Utama
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
