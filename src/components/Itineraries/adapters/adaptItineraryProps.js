import config from "../../../config/config";

export default function (originalPrice, departureLocation, arrivalLocation, departureDate, arrivalDate, carrier) {
  const price = `${originalPrice.toString().replace(".", ",")}${config.get("currency")}`;
  const arrivalInfo = `${carrier} - ${departureLocation} a ${arrivalLocation} - ${departureDate}`;
  const departureInfo = `${carrier} - ${arrivalLocation} a ${departureLocation} - ${arrivalDate}`;

  return {
    price,
    arrivalInfo,
    departureInfo,
  };
}
