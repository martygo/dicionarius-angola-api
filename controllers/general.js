// prettier-ignore
const fs = require("fs");
const factory = require("./factory");

const data = fs.readFileSync("./provider/general.json", "utf8");
const parseJson = JSON.parse(data);

exports.getAllGeneral = factory.getAll(parseJson);
exports.getOneGeneral = factory.getOne(parseJson);
