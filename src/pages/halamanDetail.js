import React, { Component } from "react";

import Header from "parts/header";
import DetailJudul from "parts/halDetailJudul";
import FeaturedImage from "parts/halDetailFeaturedImage";
import Deskripsi from "parts/halDetailDeskripsi";
import BookingForm from "parts/bookingForm";
import DetailsPageJSON from "json/itemDetails";

export default class halamanDetail extends Component {
  componentDidMount() {
    window.title = "Sanscation | Details";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumbdata = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <DetailJudul
          breadcrumb={breadcrumbdata}
          data={DetailsPageJSON}
        ></DetailJudul>
        <FeaturedImage data={DetailsPageJSON.imageUrls} />
        <div className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Deskripsi data={DetailsPageJSON} />
            </div>
            <div className="col">
              <BookingForm itemDetails={DetailsPageJSON} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
