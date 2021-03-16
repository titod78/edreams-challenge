import config from "../config/config";

export default async function () {
  try {
    const response = await fetch(config.get("urls").itineraries);
    return await response.json();
  } catch (e) {
    throw e;
  }
}
