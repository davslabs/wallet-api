const axios = require("axios");
const API_URL = process.env.ETHERSCAN_API_URL;
const API_KEY = process.env.ETHERSCAN_API_KEY;

exports.get = (query) => {
  const url = buildQuery(query);

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const buildQuery = (query) => {
  return `${API_URL}${query}${API_KEY}`;
};
