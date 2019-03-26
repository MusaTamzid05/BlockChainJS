

class Miner {

    constructor(blockchain , transactionPool , wallet , p2pServer) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine() {
        // grap transaction from pool.
        // create a block with the transaction.
        // sync the chain.

        const validTransactions = this.transactionPool.validTransactions();
        //  reward for the miner.
        //  create a block consisting in the peer-to-peer server
        //
    }
}

module.exports = Miner;
