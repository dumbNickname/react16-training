import React from 'react';

function getRandomColor() {
  const hexBase = '0123456789ABCDEF';  
  const hexColor = [...Array(6)]
    .map(() => hexBase[Math.floor(Math.random() * hexBase.length)])
    .join('');
  return `#${hexColor}`;
}

export function withDiscoEffect(WrappedComponent) {
  return class extends React.Component {
    state = {
      innerWidth: 0,
      innerHeight: 0,
      randomColor: null,
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
        fontColor: (randomColor.replace('#', '0x')) > (0xffffff / 2)
          ? '#333'
          : '#fff'
      });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props}/>;
    }
  };
}