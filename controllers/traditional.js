const fs = require("fs");
const factory = require("./factory");

const data = fs.readFileSync("./provider/traditional.json", "utf8");
const parseJson = JSON.parse(data);

exports.getAllTraditional = factory.getAll(parseJson);
exports.getOneTraditional = factory.getOne(parseJson);
