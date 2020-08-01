import React, { Component } from 'react';
import './Sections.css';
import Sectionlist from './Sectionlist';

const URL = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';
class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      details: [],
    }
  }
  componentDidMount(){
    fetch(URL, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => this.setState({ details: data }));
  }
    render(){
      return (
        <div>
          
          <h1>How it Works</h1>
          <Sectionlist passDetails={this.state.details} />
          <Sectionlist passDetails={this.state.details} />
          <Sectionlist passDetails={this.state.details} />
          <Sectionlist passDetails={this.state.details} />
          
        </div>
      );
      }
}
export default Sections;