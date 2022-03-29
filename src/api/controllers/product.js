const products = require("../data/products.json");

const getAll = ({ id, name, description, price }) =>
  new Promise((resolve) => {
    let result = Array.from(products);

    if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (name) {
      result = result.filter((item) => item.name === name);
    }

    if (description) {
      result = result.filter((item) => item.description === description);
    }

    if (price) {
      result = result.filter((item) => item.price === Number(price));
    }

    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      resolve({ code: 200, data: JSON.stringify(product) });
    } else {
      resolve({
        code: 404,
        data: { message: `No product found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};


const checkArguments = (var1) => {
	return new Promise((resolve, reject) => {
		if (typeof var1 !== "undefined") {
			resolve("Success!");
		} else {
			reject("Error! Function requires an argument!");
		}
	});
};