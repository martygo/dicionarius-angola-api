const factory = require("./factory");
const fs = require("fs");

const data = fs.readFileSync("./provider/greetings.json", "utf8");
const parseJson = JSON.parse(data);

exports.getAllGreetings = factory.getAll(parseJson);
exports.getOneGreetings = factory.getOne(parseJson);
