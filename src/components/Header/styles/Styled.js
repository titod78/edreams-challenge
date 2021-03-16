import styled from "styled-components";

export const HeaderStyled = styled.div`
  background: ${(props) => props.theme.colors.primaryDark} url("/logo.png") no-repeat;
  background-size: auto 80px;
  width: 100%;
  height: 80px;
`;
