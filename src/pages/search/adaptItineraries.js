import formatDate from "../../utils/formatDate";

export default function (originalItineraries) {
  return originalItineraries.map((itinerary) => {
    const { departureDate, arrivalDate } = itinerary;
    return {
      ...itinerary,
      departureDate: formatDate(new Date(departureDate.year, departureDate.month, departureDate.dayOfMonth)),
      arrivalDate: formatDate(new Date(arrivalDate.year, arrivalDate.month, arrivalDate.dayOfMonth)),
    };
  });
}
