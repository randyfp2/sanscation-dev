import React, { Component } from "react";

import Header from "parts/header";
import DetailJudul from "parts/halDetailJudul";
import FeaturedImage from "parts/halDetailFeaturedImage";
import Deskripsi from "parts/halDetailDeskripsi";
import BookingForm from "parts/bookingForm";
import FeaturedLoc from "parts/sectionCategories";
import DetailsPageJSON from "json/itemDetails";
import Testimoni from "parts/testimoni";
import Footer from "parts/Footer";
import Fade from "react-reveal/Fade";

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
            <div className="col-7 pr-5 mb-3">
              <Deskripsi data={DetailsPageJSON} />
            </div>
            <div className="col">
              <BookingForm itemDetails={DetailsPageJSON} />
            </div>
          </div>
        </div>
        <FeaturedLoc data={DetailsPageJSON.categories} />
        <Fade bottom bottomdelay={400}>
          <Testimoni data={DetailsPageJSON.testimonial} />
        </Fade>{" "}
        <Fade bottom bottom delay={400}>
          <Footer />
        </Fade>
      </>
    );
  }
}
