/* eslint-disable no-undef */
const Doves = artifacts.require("Doves");
const fs = require("fs");

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts();
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

    const address = JSON.stringify({ address: contract.address }, null, 4);

    fs.writeFileSync("./src/abis/contractAddress.json", address, "utf8");
    console.log("Deployed contract address:", contract.address);
  } catch (error) {
    console.log("Hello from inside of deploy.js");
    console.error(error);
  }
};
