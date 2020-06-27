const fs = require("fs");
const factory = require("./factory");

const data = fs.readFileSync("./provider/objects.json", "utf8");
const parseJson = JSON.parse(data);

exports.getAllObjects = factory.getAll(parseJson);
exports.getOneObjects = factory.getOne(parseJson);
