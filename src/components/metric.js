const Metric = (props) => {
  const { weight, height } = props;
  // console.log(props);
  return (
    <>
      <p />
      Weight:
      <input
        type="text"
        placeholder="Enter your weight (kg)"
        id="mweight"
        value={weight}
        onChange={props.handleWeight}
      />
      <p />
      Height:
      <input
        type="text"
        placeholder="Enter your height (cm)"
        value={height}
        id="mheight"
        onChange={props.handleHeight}
      />
      <br />
    </>
  );
};
export default Metric;
