module.exports = {
  expo: {
    name: "Aplikacie",
    slug: "aplikacie",
    version: "1.0.0",
    icon: "./assets/yazda-dark.png",
    userInterfaceStyle: "automatic",
    scheme: "aplikacie",
    notification: {
      androidMode: "default",
      icon: "./assets/yazda-light--noti-logo.png",
      color: "#FFFFFF",
    },
    splash: {
      image: "./assets/top_res_splash.png",
      resizeMode: "cover",
      backgroundColor: "#000",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      config: {
        usesNonExemptEncryption: false,
      },
      bundleIdentifier: "com.pma.aplikacie",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/yazda-dark.png",
        backgroundColor: "#000",
      },

      package: "com.pma.aplikacie",
    },
    web: {
      favicon: "./assets/yazda-dark.png",
    },
    owner: "markocelovsky",
  },
};
