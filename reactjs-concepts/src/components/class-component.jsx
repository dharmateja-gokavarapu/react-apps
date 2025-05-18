import { Component } from "react";

//life cycles of class component

// ComponetDidMount
// ComponetDidUpdate
// ComponentWillUnmount

class ClassComponent extends Component {
  //state
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  };

  handleClick = () => {
    // console.log("button Clicked");
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  };

  increment = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("this is called first time on page load");
    this.handleClick();
  }

  componentDidUpdate(prevProps, prevState) {
    //called when props or state value changes
    console.log(prevProps, prevState, "didupdate");
    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  componentWillUnmount() {
    console.log("componet will getting unmounted");
  }

  render() {
    const { showText, changeColor, count, changeCountStyle } = this.state;
    return (
      <div style={{ background: changeColor ? "red" : null }}>
        {showText ? <h3>Class Component</h3> : null}
        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.increment}>Increment</button>
        <h3 style={{ color: changeCountStyle ? "black" : "white" }}>
          Count is {count}
        </h3>
      </div>
    );
  }
}

export default ClassComponent;
