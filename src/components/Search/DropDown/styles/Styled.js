import styled from "styled-components";
import media from "../../../../styles/media";

export const DropDownStyled = styled.select`
  border-radius: 4px;
  font-size: ${(props) => props.theme.font.size.medium};
  color: ${(props) => props.theme.colors.greyDark};
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 4px;
  padding: 12.5px ${(props) => props.theme.spacing.medium};
  margin-right: ${(props) => props.theme.spacing.small};
  width: 47%;
  margin-bottom: ${(props) => props.theme.spacing.small};
  @media only screen and ${media.device.medium} {
    width: 33.3%;
    margin-bottom: 0;
  }
`;
