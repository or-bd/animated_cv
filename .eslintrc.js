module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
  ],
  "extends": ["airbnb"],
  "rules": {
    "react/jsx-filename-extension": "off",
    "jsx-a11y/label-has-for": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "arrow-body-style": "off",
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react-hooks/rules-of-hooks": "error",
    "object-curly-newline": "off",
    "react/prop-types": "off",
  },
  "globals": {
    "_": true,
    "after": true,
    "afterEach": true,
    "before": true,
    "beforeEach": true,
    "describe": true,
    "it": true,
    "FormData": true
  }
};
