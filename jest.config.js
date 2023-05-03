module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testMatch: ["<rootDir>/__tests__/**/*.test.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@expo|@react-native-community|@react-navigation)",
  ],

  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  cacheDirectory: ".jest/cache",
};
