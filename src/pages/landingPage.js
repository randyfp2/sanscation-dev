import React, { Component } from "react";
import Header from "parts/header";
import { render } from "@testing-library/react";
import homePageJSON from "json/landingPage";
import Hero from "parts/hero";
import MostPicked from "parts/mostPicked";
import SectionCategories from "parts/sectionCategories";

export default class landingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={homePageJSON.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={homePageJSON.mostPicked}
        />
        <SectionCategories data={homePageJSON.categories} />
      </>
    );
  }
}
