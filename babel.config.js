module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./assets",
            "~": "./src",
            "@libs": "./src/Libs",
            "@screens": "./src/Screens",
            "@components": "./src/Screens/Components",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
