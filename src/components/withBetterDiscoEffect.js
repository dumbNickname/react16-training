import { Component } from 'react';

import { getRandomColor, fontColorFor } from '../services/ramdomizer';

export class WithBetterDiscoEffect extends Component {
  state = {
    innerWidth: 0,
    innerHeight: 0,
    randomColor: null
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const randomColor = getRandomColor();
    this.setState({ 
        innerWidth: window.innerWidth, 
        innerHeight: window.innerHeight,
        bgColor: randomColor,
        fontColor: fontColorFor(randomColor),
    });
}

  render() {
    const { children, ...restProps } = this.props;
    return children({
        ...this.state,
        ...restProps,
    });
  }
};
