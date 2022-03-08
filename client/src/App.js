//import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import {getWeb3, getAccounts, getContractInstance} from "./utils.js";

function App() {

  const [web3, setWeb3] = useState(undefined);
  const [accounts,setAccounts] = useState([]);
  const [contract, setContract] = useState(undefined);

  useEffect(() => {
    console.log('component mounted');

    const init = async() => {
      const web3 = await getWeb3();
      const accounts = await getAccounts(web3);
      const contractInstance = await getContractInstance(web3);
      setWeb3(web3);
      setAccounts(accounts);
      setContract(contractInstance);

      console.log('length::'+accounts.length);
    }
    init();

  },[]);


  if(web3 === undefined && accounts.length === 0 ) {
    return(
      <div>Loading....</div>
    );
  } 
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Simple Smart Contract #1 - Web3
          </p>
          <p>
            Open Console and see the values
            {console.log(web3)}
          </p>
          
          <p>
            Contract Instance
            {console.log(contract)}
          </p>
  
          <p>
            Default Ganache Accounts          
            {console.log(accounts)}
          </p>
            
          
        </header>
      </div>
    );

}

export default App;
