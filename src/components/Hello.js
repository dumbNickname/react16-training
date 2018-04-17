import React, { Component } from "react";

export class Hello extends Component {
  render() {
    const { who } = this.props;
    return <span className="hello">Hello {who}</span>;
  }
}
