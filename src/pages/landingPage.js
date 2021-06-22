import React, { Component } from 'react'
import Header from 'parts/header'
import { render } from '@testing-library/react'
import homePageJSON from 'json/landingPage'
import Hero from 'parts/hero'

export default class landingPage extends Component {
  render() {
    return (
    <>
       <Header {...this.props}></Header>
       <Hero data={homePageJSON.hero} />
     </> 
     );
    }
}
