import React, { useState } from "react";
import config from "../../../config/config";
import { DatePickerStyled } from "./styles/Styled";
import "react-datepicker/dist/react-datepicker.css";
import formatDate from "../../../utils/formatDate";

const DatePicker = ({ label, onChange }) => {
  const [startDate, setStartDate] = useState("");
  const dateFormat = config.get("dateFormat");
  const setDate = (date) => {
    setStartDate(date);
    onChange(formatDate(date));
  };

  return (
    <>
      <DatePickerStyled
        isClearable
        placeholderText={label}
        dateFormat={dateFormat}
        selected={startDate}
        onChange={setDate}
      />
    </>
  );
};

export default DatePicker;
