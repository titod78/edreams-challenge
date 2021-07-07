import React from "react";
import { ItineraryStyled, ItinearyInfoStyled, PriceStyled } from "./styles/Styled";

const Itinerary = ({ price, arrivalInfo, departureInfo }) => {
  return (
    <ItineraryStyled>
      <ItinearyInfoStyled>{arrivalInfo}</ItinearyInfoStyled>
      <ItinearyInfoStyled>{departureInfo}</ItinearyInfoStyled>
      <PriceStyled>{price}</PriceStyled>
    </ItineraryStyled>
  );
};

export default Itinerary;
