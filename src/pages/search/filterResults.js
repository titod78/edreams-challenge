import isEmpty from "../../utils/isEmpty";

function isItineraryInSearch(itinerary, params) {
  return Object.keys(params).every((key) => itinerary[key] === params[key]);
}

function getItinerariesFiltered(itineraries, params) {
  return itineraries.filter((itinerary) => {
    return isItineraryInSearch(itinerary, params);
  });
}

export default function (itineraries, params, sortBy) {
  if (isEmpty(params)) {
    return itineraries;
  }
  const itineariesFiltered = getItinerariesFiltered(itineraries, params);
  return sortBy
    ? itineariesFiltered.sort(function (a, b) {
        return a[sortBy] - b[sortBy];
      })
    : itineariesFiltered;
}
