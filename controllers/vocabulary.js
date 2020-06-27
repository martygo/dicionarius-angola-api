const fs = require("fs");
const factory = require("./factory");

const data = fs.readFileSync("./provider/vocabulary.json", "utf8");
const parseJson = JSON.parse(data);

exports.getAllVocabulary = factory.getAll(parseJson);
exports.getOneVocabulary = factory.getOne(parseJson);
