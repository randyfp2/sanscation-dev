import React, { Component } from "react";

import Header from "parts/header";
import DetailJudul from "parts/halDetailJudul";
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
      </>
    );
  }
}
