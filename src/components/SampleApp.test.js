import React from "react";
import ReactDOM from "react-dom";
import SampleApp from "./SampleApp";

import { shallow, mount, render as erender } from "enzyme";
import { render, cleanup, fireEvent} from 'react-testing-library';

describe("renders without crashing", () => {
  it("when default approach used", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SampleApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("when enzyme", () => {
    it("shallow used", () => {
      shallow(<SampleApp />);
    });

    it("mount used", () => {
      mount(<SampleApp />);
    });
  });

  describe("when snapshots taken with enzyme", () => {
    it("shallow", () => {
      expect(shallow(<SampleApp />)).toMatchSnapshot();
    });

    it("mount", () => {
      expect(mount(<SampleApp />)).toMatchSnapshot();
    });

    it("render", () => {
      expect(erender(<SampleApp />)).toMatchSnapshot();
    });
  });
});

describe("renders welcome message checked with enzyme", () => {
  const wrapper = shallow(<SampleApp />);
  const welcome = <h1 className="App-title">Welcome to React</h1>;

  it('checked with plain enzyme', () => {
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('checked with jest-enzyme', () => {
    expect(wrapper).toContainReact(welcome);
  });
});


describe("renders with react-testing-library", () => {
  afterEach(cleanup);

  it('welcome message checked', () => {
    const {getByText} = render(<SampleApp />)
    const aboutAnchorNode = getByText('Welcome to React');
    expect(aboutAnchorNode).toMatchSnapshot();
  })
});

describe('check more advanced API from react-testing-library ', () => {
  class TestComponent extends React.Component {
    constructor() {
      super()
      this.state = {count: 0}
    }
  
    render() {
      const {count} = this.state
  
      return (
        <button onClick={() => this.setState({count: count + 1})}>
          Click to increase: {count}
        </button>
      )
    }
  }

  it('diff snapshot for state change', () => {
  
    const {getByText, asFragment} = render(<TestComponent />)
    const firstRender = asFragment()
    
    fireEvent.click(getByText(/Click to increase/))
    
    // This will snapshot only the difference between the first render, and the
    // state of the DOM after the click event.
    // See https://github.com/jest-community/snapshot-diff
    expect(firstRender).toMatchDiffSnapshot(asFragment())
  });
});
