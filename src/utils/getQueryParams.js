export default function () {
  const search = window.location.search;
  if (search !== "") {
    const hashes = search.slice(search.indexOf("?") + 1).split("&");
    return hashes.reduce((params, hash) => {
      const split = hash.indexOf("=");
      if (split < 0) {
        return Object.assign(params, {
          [hash]: null,
        });
      }
      const key = hash.slice(0, split);
      const val = hash.slice(split + 1);
      return Object.assign(params, { [key]: decodeURIComponent(val) });
    }, {});
  }
  return {};
}
