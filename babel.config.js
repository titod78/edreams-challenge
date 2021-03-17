module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/react"],
  plugins: ["dynamic-import-node", "@babel/plugin-transform-modules-commonjs"],
};
