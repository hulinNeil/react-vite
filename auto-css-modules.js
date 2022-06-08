const { extname } = require("path");
const CSS_EXTNAME = [".less"]; // only support .less

module.exports = () => {
  return {
    visitor: {
      ImportDeclaration(path) {
        const { specifiers, source } = path.node;
        const { value } = source;
        if (specifiers.length > 0 && CSS_EXTNAME.includes(extname(value))) {
          source.value = `${value}?babel.module.css`; // The path add 'css_modules', for webpack matching files
        }
      },
    },
  };
};
