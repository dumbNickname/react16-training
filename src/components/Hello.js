import React, { Component } from "react";

import './Hello.css'

export class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      who: props.who,
    };
    this.onWhoChange = this.onWhoChange.bind(this);
  }

  onWhoChange(e) {
    e.preventDefault();
    const who = e.target.value;
    this.setState((prevState, props) => ({
        who,
    }));
  }

  render() {
    const { who } = this.state;
    return (
      <div className="hello-container">   
        <span className="hello">Hello {who}</span>
        <input value={who} onChange={this.onWhoChange} type="text"/>
      </div>   
    );
  }
}
