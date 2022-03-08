import Web3 from 'web3';
import SimpleContract from "./contracts/SimpleContract.json";


const getWeb3 = async () => {

    // initialize web3 with local ganache provider
    const provider = new Web3.providers.HttpProvider("http://localhost:9545");
    const web3 = new Web3(provider);
    return web3;
};

const getAccounts = async(web3) => {
    const accounts = await web3.eth.getAccounts();
    return accounts;
};

const getContractInstance = async(web3) => {
    let networkId = await web3.eth.net.getId();
    let deployedNetwork = SimpleContract.networks[networkId];    
    const contractInstance = new web3.eth.Contract(
        SimpleContract.abi,
        deployedNetwork && deployedNetwork.address
    );    
    return contractInstance;
}

export {getWeb3, getAccounts, getContractInstance};