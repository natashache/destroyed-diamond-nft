/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const { API_URL, PRIVATE_KEY, ETHERSCAN_KEY } = process.env;
module.exports = {
   solidity: "0.8.0",
   // defaultNetwork: "hardhat",
   networks: {
      mainnet: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gasPrice: 300000000000
      },
      // ropsten: {
      //    url: API_URL,
      //    accounts: [`0x${PRIVATE_KEY}`]
      // }
   },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  }
}