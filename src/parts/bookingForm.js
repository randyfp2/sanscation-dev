import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

import propTypes from "prop-types";

import Button from "elements/Button";
import { InputNumber, InputDate } from "elements/Form";
import formatNumber from "utils/formatNumber";

export default class bookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;

    return (
      <Fade bottom delay={600}>
        <div className="card bordered" style={{ padding: "40px 50px" }}>
          <h4 className="mb-3">Reservasi Sekarang</h4>
          <h5 className="h2 mb-4">
            IDR {formatNumber(itemDetails.price)}{" "}
            <span
              className="text-gray-500 font-weight-light"
              style={{ fontSize: "24px" }}
            >
              / {itemDetails.unit}
            </span>
          </h5>

          <label htmlFor="duration">Jadi mau menginap berapa malam nih ?</label>
          <InputNumber
            max={30}
            suffix={" Malam"}
            isSuffixPlural
            onChange={this.updateData}
            name="duration"
            value={data.duration}
          />

          <label htmlFor="date">Mau tanggal berapa nih ?</label>
          <InputDate onChange={this.updateData} name="date" value={data.date} />

          <h6
            className="text-gray-500 font-weight-light"
            style={{ marginBottom: 40 }}
          >
            Total yang harus kamu bayar{" "}
            <span className="text-gray-900">
              IDR {formatNumber(itemDetails.price * data.duration)}
            </span>{" "}
            untuk{" "}
            <span className="text-gray-900">
              {data.duration} {itemDetails.unit}
            </span>{" "}
            yaa
          </h6>

          <Button
            className="btn"
            type="link"
            hasShadow
            isPrimary
            isBlock
            href={`/checkout`}
          >
            Reservasi
          </Button>
        </div>
      </Fade>
    );
  }
}

bookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

// export default withRouter(bookingForm);
