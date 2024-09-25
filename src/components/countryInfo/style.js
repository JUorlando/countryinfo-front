import styled from "styled-components";

export const StyledCountryInfo = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  background-color: aliceblue;

  h1 {
      margin: 0% auto;
      padding-top: 50px;
      font-size: 50px;
      color: darkblue;
  }

  img {
    margin: 0% auto;
    width: 400px;
    height: 240px;
  }

  h3 {
      margin: 0% auto;
      padding-top: 50px;
      font-size: 20px;
      color: darkblue;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    padding: 20px;
    margin: 0% auto;
    color: black;
    font-weight: bolder;
  }
`;