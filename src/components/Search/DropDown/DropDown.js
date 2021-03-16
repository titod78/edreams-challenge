import React from "react";
import { DropDownStyled } from "./styles/Styled";

const DropDown = (props) => {
  const { items = [], label } = props;

  const onChange = (e) => {
    props.onChange && props.onChange(e.target.value);
  };

  return (
    <>
      <DropDownStyled onChange={onChange}>
        <option value="">{label}</option>
        {items.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </DropDownStyled>
    </>
  );
};

export default DropDown;
