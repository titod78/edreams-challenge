import styled from "styled-components";
import media from "../../../../styles/media";

export const ItineraryStyled = styled.li`
  list-style: none;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 1px 0px;
  border-top: 4px solid ${(props) => props.theme.colors.highlight};
  margin: ${(props) => props.theme.spacing.small};
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.spacing.large};
  padding: ${(props) => props.theme.spacing.large};
  @media only screen and ${media.device.medium} {
    width: 40%;
  }
`;

export const ItinearyInfoStyled = styled.p`
  text-align: left;
  font-size: ${(props) => props.theme.font.size.large};
`;

export const PriceStyled = styled.p`
  text-align: right;
  font-weight: bold;
`;
