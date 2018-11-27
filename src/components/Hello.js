import React, { Component } from "react";

import './Hello.css'

export class Hello extends Component {

  state = {
    who: this.props.who,
  };

  onWhoChange = (e) => {
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
