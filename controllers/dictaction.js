const fs = require("fs");
const factory = require("./factory");

const dictactionData = fs.readFileSync("./provider/dictation.json", "utf8");
const parseJson = JSON.parse(dictactionData);

exports.getAllDictation = factory.getAll(parseJson);
exports.getOneDictation = factory.getOne(parseJson);
