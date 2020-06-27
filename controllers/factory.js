const { param } = require("../router");

/**
 * will verify if an array is empty, if is empty,
 * will throw an error with a default message
 * @param array
 */
const verifyEmptyArray = (array) => {
  if (!array.length) {
    throw new Error("Não foi encontrado no Dicionarius!");
  }
};
/**
 * factory to create a async function that will
 * send a response to client with a given data
 * @param  parsedData
 */
exports.getAll = (parsedData) => async (req, res) => {
  try {
    verifyEmptyArray(parsedData);
    res.status(200).json(parsedData);
  } catch (error) {
    res.status(204).json(error.message);
  }
};
exports.getOne = (parsedData) => async (req, res) => {
  try {
    const data = parsedData.filter((findId) => {
      return findId.id == req.params.id;
    });
    verifyEmptyArray(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
