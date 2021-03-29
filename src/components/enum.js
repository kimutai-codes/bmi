import React, { Component } from "react";
import styled from "styled-components";
import Result from "./result";
import Metric from "./metric";
import English from "./eng";

const WekaWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: 300px) {
    width: 300px;
  }
  width: 100%;
  input {
    margin: 2px 0px;
    outline: none;
    padding: 5px;
    border-radius: 4px;
    border: none;
    border-bottom: 2px solid #229e99;
  }
`;
const Button = styled.button`
  background-color: darkcyan;
  outline: none;
  border-style: none;
  border-radius: 5px;
  padding: 4px;
  margin: 2px 0px;
`;
const Radio = styled.input`
  margin: 4px;
`;
class Enum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: "",
      height: "",
      result: "",
      displayResult: false,
      unit: "english",
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
    const r = this.state.weight / (this.state.height / 100) ** 2;
    const result = Math.round(r * 10) / 10;
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
  handleUnit = (e) => {
    this.setState({
      unit: e.target.value,
    });
  };
  render() {
    return (
      <WekaWrapper>
        <label htmlFor="metric">Metric</label>
        <Radio
          type="radio"
          name="unit"
          value="metric"
          id="metric"
          onClick={this.handleUnit}
          defaultChecked
        />
        <label htmlFor="english">English</label>
        <Radio
          type="radio"
          name="unit"
          value="english"
          id="english"
          onClick={this.handleUnit}
        />
        {this.state.unit === "english" ? (
          <English
            height={this.state.height}
            weight={this.props.weight}
            handleHeight={this.handleHeight}
            handleWeight={this.handleWeight}
          />
        ) : (
          <Metric
            height={this.state.height}
            weight={this.props.weight}
            handleHeight={this.handleHeight}
            handleWeight={this.handleWeight}
          />
        )}
        <Button
          type="submit"
          onClick={() => {
            this.handleCalc();
            this.handleShow();
          }}
        >
          Calculate
        </Button>
        {/* <Result result={this.state.result} /> */}
        {this.state.displayResult ? (
          <Result result={this.state.result} />
        ) : null}
      </WekaWrapper>
    );
  }
}

export default Enum;
