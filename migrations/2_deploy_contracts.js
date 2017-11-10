var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Test1 = artifacts.require("./Test1.sol");
module.exports = function(deployer) {
  deployer.deploy(ConvertLib, Test1);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin, Test1);
};
