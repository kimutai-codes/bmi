const Eng = (props) => {
  const { weight, height } = props;
  return (
    <div>
      <>
        <p />
        Weight:
        <input
          type="text"
          placeholder="Enter your weight (pounds)"
          id="weight"
          value={weight}
          onChange={props.handleWeight}
        />
        <p />
        Height:
        <input
          type="text"
          placeholder="Enter your height (feet)"
          value={height}
          id="height"
          onChange={props.handleHeight}
        />
        <br />
      </>
    </div>
  );
};
export default Eng;
