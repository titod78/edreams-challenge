import React from "react";
import { ItinerariesStyled } from "./styles/Styled";
import Itinerary from "./Itinerary/Itinerary";
import adaptItineraryProps from "./adapters/adaptItineraryProps";

const Itineraries = ({ itineraries }) => {
  return (
    <ItinerariesStyled>
      {itineraries.map(({ price, departureLocation, arrivalLocation, departureDate, arrivalDate, carrier }) => {
        const itineraryProps = adaptItineraryProps(
          price,
          departureLocation,
          arrivalLocation,
          departureDate,
          arrivalDate,
          carrier
        );
        return <Itinerary {...itineraryProps} />;
      })}
    </ItinerariesStyled>
  );
};

export default Itineraries;
