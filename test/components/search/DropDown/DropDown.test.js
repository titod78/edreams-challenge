import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DropDownStyled } from "../../../../src/components/Search/DropDown/styles/Styled";
import DropDown from "../../../../src/components/Search/DropDown";

describe("DropDown component", () => {
  const changeCallback = jest.fn();
  const targetValue = "targetValue";
  const event = {
    target: { value: targetValue },
  };
  const items = ["Madrid", "Barcelona"];
  const label = "Some label";
  const baseProps = {
    onChange: changeCallback,
    items,
    label,
  };
  let dropDownStyled;
  let component;

  configure({ adapter: new Adapter() });

  beforeEach(() => {
    component = shallow(<DropDown {...baseProps} />);
    dropDownStyled = component.find(DropDownStyled);
  });

  test("DropDown on change works as expected", () => {
    dropDownStyled.simulate("change", event);
    expect(changeCallback).toBeCalledWith(targetValue);
  });
});
