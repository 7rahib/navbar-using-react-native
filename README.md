# navbar-using-react-native


<!-- dependencies -->

npm install @react-navigation/native

npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated @react-native-community/masked-view

npm install @react-navigation/drawer

<!-- dependencies -->

<!-- babel file change -->

*Change whole babel.config.js file*

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};

<!-- babel file change -->