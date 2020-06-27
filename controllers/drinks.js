const fs = require("fs");
const factory = require("./factory");

const data = fs.readFileSync("./provider/drinks.json", "utf8");
const parseJson = JSON.parse(data);

exports.getAllDrinks = factory.getAll(parseJson);
exports.getOneDrinks = factory.getOne(parseJson);
