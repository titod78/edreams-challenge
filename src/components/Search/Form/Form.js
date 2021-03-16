import React, { useState } from "react";
import { FormContainerStyled, ButtonContainerStyled, ButtonStyled } from "./styles/Styled";
import DropDown from "../DropDown/DropDown";
import DatePicker from "../DatePicker/DatePicker";
import labels from "../../../labels";

const Form = ({ locations, onSubmit }) => {
  const [departureLocation, setDepartureLocation] = useState();
  const [arrivalLocation, setArrivalLocation] = useState();
  const [departureDate, setDepartureDate] = useState();

  const onClickButton = () =>
    onSubmit({
      ...(departureLocation && { departureLocation }),
      ...(arrivalLocation && { arrivalLocation }),
      ...(departureDate && { departureDate }),
    });

  return (
    <FormContainerStyled>
      <DropDown
        label={labels.departure}
        items={locations}
        onChange={(selectedDeparture) => setDepartureLocation(selectedDeparture)}
      />
      <DropDown
        label={labels.arrival}
        items={locations}
        onChange={(selectedArrival) => setArrivalLocation(selectedArrival)}
      />
      <DatePicker label={labels.departureDate} onChange={(selectedDate) => setDepartureDate(selectedDate)} />

      <ButtonContainerStyled>
        <ButtonStyled onClick={onClickButton}>{labels.search}</ButtonStyled>
      </ButtonContainerStyled>
    </FormContainerStyled>
  );
};

export default Form;
