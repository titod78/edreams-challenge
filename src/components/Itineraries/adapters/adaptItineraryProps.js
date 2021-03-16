import config from "../../../config/config";

export default function (i, price, departureLocation, arrivalLocation, departureDate, arrivalDate, carrier) {
  const formattedPrice = `${price.toString().replace(".", ",")}${config.get("currency")}`;

  return {
    i,
    price: formattedPrice,
    departureLocation,
    arrivalLocation,
    departureDate,
    arrivalDate,
    carrier,
  };
}
