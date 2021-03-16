import styled from "styled-components";
import ReactDatePicker from "react-datepicker";

export const DatePickerStyled = styled(ReactDatePicker)`
  border-radius: 4px;
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: ${(props) => props.theme.font.size.medium};
  border: 1px solid ${(props) => props.theme.colors.grey};
  line-height: 1.4;
  padding: 11px ${(props) => props.theme.spacing.medium};
`;
