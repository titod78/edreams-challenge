import styled from "styled-components";
import media from "../../../styles/media";

export const SearchStyled = styled.p`
  margin-top: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.font.size.large};
`;

export const NoResultsStyled = styled.p`
  color: ${(props) => props.theme.colors.error};
  font-size: ${(props) => props.theme.font.size.large};
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
  margin: ${(props) => props.theme.spacing.medium};
  width: 100%;
  @media only screen and ${media.device.medium} {
    width: auto;
  }
`;
