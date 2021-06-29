import React, { Component } from "react";
import Header from "parts/header";
import { render } from "@testing-library/react";
import homePageJSON from "json/landingPage";
import Hero from "parts/hero";
import MostPicked from "parts/mostPicked";
import SectionCategories from "parts/sectionCategories";
import Testimoni from "parts/testimoni";
import Footer from "parts/Footer";
import Fade from "react-reveal/Fade";

export default class landingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Sanscation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Fade bottom>
          <Hero refMostPicked={this.refMostPicked} data={homePageJSON.hero} />
        </Fade>
        <Fade bottom delay={400}>
          <MostPicked
            refMostPicked={this.refMostPicked}
            data={homePageJSON.mostPicked}
          />
        </Fade>
        <SectionCategories data={homePageJSON.categories} />
        <Fade bottom bottomdelay={600}>
          <Testimoni data={homePageJSON.testimonial} />
        </Fade>{" "}
        <Fade bottom bottom>
          <Footer />
        </Fade>
      </>
    );
  }
}
