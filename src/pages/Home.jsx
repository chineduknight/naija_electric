import React from "react";
import Materials from "../components/Project pofile/Materials";
import Stepper from "./Stepper";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <Home.Wrapper>
      <div>
        <Stepper />
        <Materials />
      </div>
    </Home.Wrapper>
  );
};
Home.Wrapper = styled.div`
  display: grid;
  place-items: center;
`;
export default Home;
