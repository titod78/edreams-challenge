const size = {
  small: "360px",
  medium: "768px",
  large: "1200px",
};
const device = {
  small: `(min-width: ${size.small})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
};
export default { size, device };
