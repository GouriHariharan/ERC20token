require("@nomiclabs/hardhat-waffle");
//const ALCHEMY_API_KEY = "TK0wJ03prhB4VnlgRUxmrbF1c6GMhzH_";
const ROPSTEN_PRIVATE_KEY = "3ffc1cae84f50d53c24be1b77972f82537d3e6824b04ed066571b81d5070ea14";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TK0wJ03prhB4VnlgRUxmrbF1c6GMhzH_',
      accounts: ['0x${ROPSTEN_PRIVATE_KEY}']
    }
  }
};
