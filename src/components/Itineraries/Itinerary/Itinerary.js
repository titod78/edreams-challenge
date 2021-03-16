import React from "react";
import { ItineraryStyled, ItinearyInfoStyled, PriceStyled } from "./styles/Styled";

const Itinerary = ({ price, departureLocation, arrivalLocation, departureDate, arrivalDate, carrier }) => {
  return (
    <ItineraryStyled>
      <ItinearyInfoStyled>
        {carrier} - {departureLocation} a {arrivalLocation} - {departureDate}
      </ItinearyInfoStyled>
      <ItinearyInfoStyled>
        {carrier} - {arrivalLocation} a {departureLocation} - {arrivalDate}
      </ItinearyInfoStyled>
      <PriceStyled>{price}</PriceStyled>
    </ItineraryStyled>
  );
};

export default Itinerary;
