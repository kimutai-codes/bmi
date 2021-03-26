import React, { Component } from "react";
import styled from "styled-components";
import Result from "./result";

const WekaWrapper = styled.div``;
class Enum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: "",
      height: "",
      result: "",
      displayResult: false,
    };
  }

  handleWeight = (e) => {
    this.setState({
      weight: e.target.value,
    });
  };
  handleHeight = (e) => {
    this.setState({
      height: e.target.value,
    });
  };
  handleCalc = () => {
    const result = this.state.weight / ((this.state.height / 100) ^ 2);
    console.log(result);
    this.setState({
      result: result,
    });
  };
  handleShow = () => {
    this.setState({
      displayResult: true,
    });
  };
  render() {
    return (
      <WekaWrapper>
        <label />
        Weight
        <input
          type="text"
          placeholder="Enter your weight (kg)"
          id="weight"
          value={this.state.weight}
          onChange={this.handleWeight}
        />
        <label />
        Height
        <input
          type="text"
          placeholder="Enter your height (m)"
          value={this.state.height}
          id="height"
          onChange={this.handleHeight}
        />
        <button
          type="submit"
          onClick={(e) => {
            this.handleCalc();
            this.handleShow();
          }}
        >
          Calculate
        </button>
        {/* <Result result={this.state.result} /> */}
        {this.state.displayResult ? (
          <Result result={this.state.result} />
        ) : null}
      </WekaWrapper>
    );
  }
}

export default Enum;
