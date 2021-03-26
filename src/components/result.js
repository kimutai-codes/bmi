import styled from "styled-components";

const Div = styled.div`
  background-color: rgba(24, 24, 27, 0.2);
  padding: 15px;
  // width: 40%;
  border-radius: 5px;
  margin: 0 auto;
`;
const Result = (props) => {
  const { result } = props;
  return (
    <Div>
      BMI: {result} kg/m <sup>2</sup>
    </Div>
  );
};
export default Result;
