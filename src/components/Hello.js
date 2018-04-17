import React, { Component } from "react";

import './Hello.css'

export class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      who: props.who,
    };
  }

  onWhoChange(e) {
    e.preventDefault();
    this.setState({
        who: e.target.value,
    });
  }

  render() {
    const { who } = this.state;
    return (
      <div className="hello-container">   
        <span className="hello">Hello {who}</span>
        <input value={who} onChange={(e) => this.onWhoChange(e)} type="text"/>
      </div>   
    );
  }
}
