module.exports = {
    skipFiles: ["./NineWorldsMinigame.sol", "Migrations.sol", "./test/VRFCoordinatorMock.sol", "./interfaces/IERC20.sol"],
    providerOptions: {
        "gasLimit": "0x1fffffffffffff",
        "default_balance_ether": 1000000,
        "fork": "http://198.244.164.108:8545",
        "unlocked_accounts": ["0xb7a298189b2c8b703f34cad886e915008c2db738", "0xf977814e90da44bfa03b6295a0616a897441acec"],
        "total_accounts": 100,
        "forkCacheSize": -1
    }
}