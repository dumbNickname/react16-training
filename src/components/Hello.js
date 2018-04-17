import React, { Component } from "react";

import './Hello.css'

export class Hello extends Component {

  render() {
    const { who } = this.props;
    return (
      <div className="hello-container">   
        <span className="hello">Hello {who}</span>
        <input value={who} onChange={(e) => alert(e.target.value)} type="text"/>
      </div>   
    );
  }
}
