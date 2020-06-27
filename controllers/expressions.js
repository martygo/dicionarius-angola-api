const factory = require("./factory");
const fs = require("fs");

const data = fs.readFileSync("./provider/expressions.json", "utf8");
const parseJson = JSON.parse(data);

exports.getAllExpressions = factory.getAll(parseJson);
exports.getOneExpressions = factory.getOne(parseJson);
