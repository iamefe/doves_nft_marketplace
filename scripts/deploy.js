/* eslint-disable no-undef */
const Doves = artifacts.require("Doves");
const fs = require("fs");

module.exports = async (deployer, accounts) => {
  try {
    if (accounts.length < 2) {
      console.error("Not enough accounts available");
      return;
    }

    const contract = await deployer.deploy(
      Doves,
      "Doves",
      "DOV",
      10,
      accounts[1]
    );

    console.log(contract);

    const address = JSON.stringify({ address: contract.address }, null, 4);
    fs.writeFile("./src/abis/contractAddress.json", address, "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Deployed contract address", contract.address);
    });
  } catch (error) {
    console.log("Hello from inside of deploy.js");
    console.error(error);
  }
};
