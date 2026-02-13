import styled from "styled-components";

const StyledMain = styled.main`
  border-radius: 5rem;
  padding: 0;
  margin: 0;
  background: black;
  width: 70vw;
  height: 60vh;
  //cursor: default !important;
  user-select: none !important;

  @media (width < 40rem) {
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export default StyledMain;
