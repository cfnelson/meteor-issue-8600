module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "no-extra-parens": 0, // Interferes with jsx
    "no-underscore-dangle": 0, // Mongo _id
    "react/prefer-stateless-function": 1, // We'll choose manually
    "react/prop-types": 1, // Slows down while prototyping / experimenting
    "max-len": 1, // Sometimes necessary to have long strings and not risk whitespace
    "no-param-reassign": [2, { "props": false }], // Allows assignment of new properties
    "new-cap": 1, // Warning is good enough - we don't have any control over external packages doing this
    "import/named": 2, // Ensure named imports correspond to a named export in the remote file
    "import/no-extraneous-dependencies": 0, // https://github.com/benmosher/eslint-plugin-import/issues/479
    "import/extensions": ["off", "never"], // https://github.com/benmosher/eslint-plugin-import/issues/593
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // allow react in .js files
    "no-mixed-operators": 0, // Allow && || usage. e.g: const foo = a && a.foo || undefined;
  },
  "settings": {
    "import/resolver": "meteor",
  },
}
