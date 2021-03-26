import styled from "styled-components";
import Enum from "./components/enum";
import GlobalStyle from "./components/globalStyles";

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <h1>BMI CALCULATOR</h1>
      <Enum />
    </AppWrapper>
  );
};

export default App;
