require("@nomicfoundation/hardhat-toolbox");

const { vars } = require("hardhat/config");

const INFURA_API_KEY = vars.get("INFURA_API_KEY");
const PRIVATE_KEY = vars.get("PRIVATE_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    kakarot: {
      url: `https://sepolia-rpc.kakarot.org`,
      accounts: [PRIVATE_KEY],
    },
    op_sepolia: {
      url: `https://optimism-sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};
