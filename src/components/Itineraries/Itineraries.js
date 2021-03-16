import React from "react";
import { ItinerariesStyled } from "./styles/Styled";
import Itinerary from "./Itinerary/Itinerary";
import adaptItineraryProps from "./adapters/adaptItineraryProps";

const Itineraries = ({ itineraries }) => {
  return (
    <ItinerariesStyled>
      {itineraries.map(({ price, departureLocation, arrivalLocation, departureDate, arrivalDate, carrier }, i) => {
        const itineraryProps = adaptItineraryProps(
          i,
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
