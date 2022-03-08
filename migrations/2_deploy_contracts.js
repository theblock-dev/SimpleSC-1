const Simple = artifacts.require("SimpleContract.sol");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(Simple);
}

