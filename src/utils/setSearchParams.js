import isEmpty from "./isEmpty";

export default function (params) {
  return (
    (!isEmpty(params) &&
      Object.keys(params)
        .map((param) => `${param}=${encodeURI(params[param])}`)
        .join("&")) ||
    ""
  );
}
