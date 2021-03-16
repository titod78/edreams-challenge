const config = {
  urls: {
    itineraries: "/itineraries",
    locations: "/locations",
  },
  dateFormat: "dd/MM/yyyy",
  currency: "EUR",
  itinerariesOrderBy: "price",
};

export default {
  get: function (prop) {
    return config[prop] || prop;
  },
};
