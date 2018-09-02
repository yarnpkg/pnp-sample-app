module.exports = {
    "env": {
        "browser": true,
        "jest/globals": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "prettier"
    ],
    "parser": "babel-eslint",
    "plugins": [
        "import",
        "jest",
        "prettier",
        "react"
    ],
    "settings": {
        "import/resolver": {
            [require.resolve('./scripts/eslint-resolver.js')]: {}
        }
    }
};
