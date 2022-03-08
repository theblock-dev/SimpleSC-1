const Simple = artifacts.require("SimpleContract.sol");

contract('SimpleContract', async (accounts) => {

    let instance; 
    
    beforeEach(async function(){
        instance = await Simple.deployed();
    });
    
    it('should deploy the smart contract correctly', async() => {
        console.log(instance.address);
        assert(instance.address !== '');
    })
});