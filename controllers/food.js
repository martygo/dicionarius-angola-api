const fs = require("fs");
const factory = require("./factory");

const data = fs.readFileSync("./provider/food.json", "utf8");
const parseJson = JSON.parse(data);

exports.getAllFood = factory.getAll(parseJson);
exports.getOneFood = factory.getOne(parseJson);
