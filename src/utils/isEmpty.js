export default function isEmpty(object) {
  const obj = object || {};
  return Object.keys(obj).length === 0;
}
