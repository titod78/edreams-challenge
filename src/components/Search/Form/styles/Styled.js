import styled from "styled-components";
import media from "../../../../styles/media";

export const FormContainerStyled = styled.div`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-top: 4px solid ${(props) => props.theme.colors.highlight};
  text-align: center;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.medium};
  @media only screen and ${media.device.medium} {
    width: 40%;
  }
`;

export const ButtonContainerStyled = styled.div`
  text-align: right;
`;

export const ButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.white};
  border-style: solid;
  border-color: ${(props) => props.theme.colors.secondary};
  box-shadow: none;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.font.weight.bold};
  border-width: 1px;
  border-radius: 4px;
  line-height: 1;
  font-size: ${(props) => props.theme.font.size.medium};
  padding: 13px 24px;
  cursor: pointer;
  margin: ${(props) => props.theme.spacing.small} 0;
  width: 100%;
  @media only screen and ${media.device.medium} {
    margin: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.small} 0;
    width: auto;
  }
`;
