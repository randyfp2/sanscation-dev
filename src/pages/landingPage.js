import React, { Component } from 'react'
import Header from 'parts/header'
import { render } from '@testing-library/react';

export default class landingPage extends Component {
  render() {
    return (
    <>
       <Header {...this.props}></Header>
     </> 
     );
    }
}
