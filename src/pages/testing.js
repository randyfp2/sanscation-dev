import React, { Component } from "react";
import InputDate from "elements/Form/InputTanggal";
import Breadcrumb from "elements/Breadcrumb";
export default class testing extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const breadcrumbdata = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    console.log(this.state);
    return (
      <>
        <div className="container">
          <div className="container breadsec">
            <Breadcrumb data={breadcrumbdata} />
          </div>
          <div
            className="row align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <div className="col-auto">
              <InputDate
                max={30}
                onChange={this.handleChange}
                name="value"
                value={this.state.value}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
