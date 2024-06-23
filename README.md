 # Run

 ```
 npm i
 npx hardhat vars set INFURA_API_KEY # used to deploy, you can change with Alchemy or other
 npx hardhat vars set PRIVATE_KEY # key of the wallet who will deploy the contract
 npx hardhat compile
 npx hardhat ignition deploy ./ignition/modules/Token.js --network op_sepolia # you'll need optimism sepolia eth
 ```

