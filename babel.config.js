module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            navigation: "./src/navigation",
            screens: "./src/screens",
            schema: "./src/schema",
            assets: "./assets",
          },
        },
      ],
    ],
  };
};
