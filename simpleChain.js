const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(data) {
    this.height = '';
    this.timeStamp = '';
    this.data = data;
    this.previousHash = '0x';
    this.hash = '';
  }
}

class Blockchain{
    constructor() {
      this.chain = [];
      // add first genesis block
      this.addBlock(this.createGenesisBlock());
   }

  createGenesisBlock() {
    return new Block("First block in the chain - Genesis block");
  }

  getLatestBlock() {
      return this.chain[this.chain.length - 1];
  }
// addBlock method
  addBlock(newBlock) {
    newBlock.height = this.chain.length;
    newBlock.timeStamp = new Date().getTime().toString().slice(0,-3);  
    if (this.chain.length > 0) {
      newBlock.previousHash = this.getLatestBlock().hash;
    }

    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}