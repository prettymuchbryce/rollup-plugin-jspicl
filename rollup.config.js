export default {
  input: "src/index.js",
  external: ["fs", "path", "jspicl", "mkdirp", "columnify"],
  output: {
    file: "build/plugin.js",
    format: "cjs"
  }
};