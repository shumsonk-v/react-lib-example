const fs = require("fs");

const getFolders = (direcoryPath) => {
  try {
    const dirs = fs.readdirSync(direcoryPath);
    const result = dirs
      ? dirs.filter((name) => !["index.ts"].includes(name))
      : [];
    return result || [];
  } catch (e) {
    return [];
  }
};

module.exports = {
  getFolders,
};