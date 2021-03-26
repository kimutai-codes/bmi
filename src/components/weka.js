import React, { useState } from "react";
import styled from "styled-components";
import Result from "./result";

const WekaWrapper = styled.div`
  input {
    // display: inline-block;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 4px;
    width: min-content;
  }
`;

const Weka = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const handleCalc = () => {
    const result = weight / ((height / 100) ^ 2);
    console.log(result);
    setResult(result);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <WekaWrapper onSubmit={handleCalc}>
      <input
        placeholder="Enter your weight (kg)"
        type="text"
        id="weight"
        onChange={handleWeight}
      />
      kg
      <input
        type="text"
        placeholder="Enter your height (m)"
        id="height"
        onChange={handleHeight}
      />
      cm
      <button type="submit" onClick={handleCalc}>
        Calculate
      </button>
      <Result result={result} />
    </WekaWrapper>
  );
};

export default Weka;
