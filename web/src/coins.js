const coins = {
    "bitcoin": {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    },
    "ethereum": {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
    },
    "tether": {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707"
    },
    "usd-coin": {
        "id": "usd-coin",
        "symbol": "usdc",
        "name": "USD Coin",
        "image": "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389"
    },
    "binancecoin": {
        "id": "binancecoin",
        "symbol": "bnb",
        "name": "BNB",
        "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
    },
    "binance-usd": {
        "id": "binance-usd",
        "symbol": "busd",
        "name": "Binance USD",
        "image": "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766"
    },
    "ripple": {
        "id": "ripple",
        "symbol": "xrp",
        "name": "XRP",
        "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
    },
    "cardano": {
        "id": "cardano",
        "symbol": "ada",
        "name": "Cardano",
        "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
    },
    "solana": {
        "id": "solana",
        "symbol": "sol",
        "name": "Solana",
        "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422"
    },
    "polkadot": {
        "id": "polkadot",
        "symbol": "dot",
        "name": "Polkadot",
        "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644"
    },
    "dogecoin": {
        "id": "dogecoin",
        "symbol": "doge",
        "name": "Dogecoin",
        "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256"
    },
    "shiba-inu": {
        "id": "shiba-inu",
        "symbol": "shib",
        "name": "Shiba Inu",
        "image": "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446"
    },
    "staked-ether": {
        "id": "staked-ether",
        "symbol": "steth",
        "name": "Lido Staked Ether",
        "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546"
    },
    "matic-network": {
        "id": "matic-network",
        "symbol": "matic",
        "name": "Polygon",
        "image": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"
    },
    "dai": {
        "id": "dai",
        "symbol": "dai",
        "name": "Dai",
        "image": "https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734"
    },
    "avalanche-2": {
        "id": "avalanche-2",
        "symbol": "avax",
        "name": "Avalanche",
        "image": "https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818"
    },
    "tron": {
        "id": "tron",
        "symbol": "trx",
        "name": "TRON",
        "image": "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066"
    },
    "ethereum-classic": {
        "id": "ethereum-classic",
        "symbol": "etc",
        "name": "Ethereum Classic",
        "image": "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169"
    },
    "wrapped-bitcoin": {
        "id": "wrapped-bitcoin",
        "symbol": "wbtc",
        "name": "Wrapped Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744"
    },
    "uniswap": {
        "id": "uniswap",
        "symbol": "uni",
        "name": "Uniswap",
        "image": "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604"
    },
    "cosmos": {
        "id": "cosmos",
        "symbol": "atom",
        "name": "Cosmos Hub",
        "image": "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960"
    },
    "leo-token": {
        "id": "leo-token",
        "symbol": "leo",
        "name": "LEO Token",
        "image": "https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215"
    },
    "litecoin": {
        "id": "litecoin",
        "symbol": "ltc",
        "name": "Litecoin",
        "image": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
    },
    "okb": {
        "id": "okb",
        "symbol": "okb",
        "name": "OKB",
        "image": "https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1642471050"
    },
    "near": {
        "id": "near",
        "symbol": "near",
        "name": "NEAR Protocol",
        "image": "https://assets.coingecko.com/coins/images/10365/large/near_icon.png?1601359077"
    },
    "ftx-token": {
        "id": "ftx-token",
        "symbol": "ftt",
        "name": "FTX",
        "image": "https://assets.coingecko.com/coins/images/9026/large/F.png?1609051564"
    },
    "chainlink": {
        "id": "chainlink",
        "symbol": "link",
        "name": "Chainlink",
        "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700"
    },
    "crypto-com-chain": {
        "id": "crypto-com-chain",
        "symbol": "cro",
        "name": "Cronos",
        "image": "https://assets.coingecko.com/coins/images/7310/large/oCw2s3GI_400x400.jpeg?1645172042"
    },
    "terra-luna": {
        "id": "terra-luna",
        "symbol": "lunc",
        "name": "Terra Luna Classic",
        "image": "https://assets.coingecko.com/coins/images/8284/large/01_LunaClassic_color.png?1653547790"
    },
    "stellar": {
        "id": "stellar",
        "symbol": "xlm",
        "name": "Stellar",
        "image": "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157"
    },
    "monero": {
        "id": "monero",
        "symbol": "xmr",
        "name": "Monero",
        "image": "https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729"
    },
    "bitcoin-cash": {
        "id": "bitcoin-cash",
        "symbol": "bch",
        "name": "Bitcoin Cash",
        "image": "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492"
    },
    "algorand": {
        "id": "algorand",
        "symbol": "algo",
        "name": "Algorand",
        "image": "https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725"
    },
    "flow": {
        "id": "flow",
        "symbol": "flow",
        "name": "Flow",
        "image": "https://assets.coingecko.com/coins/images/13446/large/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1631696776"
    },
    "vechain": {
        "id": "vechain",
        "symbol": "vet",
        "name": "VeChain",
        "image": "https://assets.coingecko.com/coins/images/1167/large/VeChain-Logo-768x725.png?1547035194"
    },
    "internet-computer": {
        "id": "internet-computer",
        "symbol": "icp",
        "name": "Internet Computer",
        "image": "https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1620703073"
    },
    "filecoin": {
        "id": "filecoin",
        "symbol": "fil",
        "name": "Filecoin",
        "image": "https://assets.coingecko.com/coins/images/12817/large/filecoin.png?1602753933"
    },
    "eos": {
        "id": "eos",
        "symbol": "eos",
        "name": "EOS",
        "image": "https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481"
    },
    "apecoin": {
        "id": "apecoin",
        "symbol": "ape",
        "name": "ApeCoin",
        "image": "https://assets.coingecko.com/coins/images/24383/large/apecoin.jpg?1647476455"
    },
    "chain-2": {
        "id": "chain-2",
        "symbol": "xcn",
        "name": "Chain",
        "image": "https://assets.coingecko.com/coins/images/24210/large/Chain_icon_200x200.png?1646895054"
    },
    "tezos": {
        "id": "tezos",
        "symbol": "xtz",
        "name": "Tezos",
        "image": "https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png?1547034862"
    },
    "the-sandbox": {
        "id": "the-sandbox",
        "symbol": "sand",
        "name": "The Sandbox",
        "image": "https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1597397942"
    },
    "decentraland": {
        "id": "decentraland",
        "symbol": "mana",
        "name": "Decentraland",
        "image": "https://assets.coingecko.com/coins/images/878/large/decentraland-mana.png?1550108745"
    },
    "hedera-hashgraph": {
        "id": "hedera-hashgraph",
        "symbol": "hbar",
        "name": "Hedera",
        "image": "https://assets.coingecko.com/coins/images/3688/large/hbar.png?1637045634"
    },
    "frax": {
        "id": "frax",
        "symbol": "frax",
        "name": "Frax",
        "image": "https://assets.coingecko.com/coins/images/13422/large/frax_logo.png?1608476506"
    },
    "quant-network": {
        "id": "quant-network",
        "symbol": "qnt",
        "name": "Quant",
        "image": "https://assets.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg?1612437252"
    },
    "axie-infinity": {
        "id": "axie-infinity",
        "symbol": "axs",
        "name": "Axie Infinity",
        "image": "https://assets.coingecko.com/coins/images/13029/large/axie_infinity_logo.png?1604471082"
    },
    "aave": {
        "id": "aave",
        "symbol": "aave",
        "name": "Aave",
        "image": "https://assets.coingecko.com/coins/images/12645/large/AAVE.png?1601374110"
    },
    "lido-dao": {
        "id": "lido-dao",
        "symbol": "ldo",
        "name": "Lido DAO",
        "image": "https://assets.coingecko.com/coins/images/13573/large/Lido_DAO.png?1609873644"
    },
    "elrond-erd-2": {
        "id": "elrond-erd-2",
        "symbol": "egld",
        "name": "Elrond",
        "image": "https://assets.coingecko.com/coins/images/12335/large/elrond3_360.png?1626341589"
    },
    "theta-token": {
        "id": "theta-token",
        "symbol": "theta",
        "name": "Theta Network",
        "image": "https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png?1548387191"
    },
    "chiliz": {
        "id": "chiliz",
        "symbol": "chz",
        "name": "Chiliz",
        "image": "https://assets.coingecko.com/coins/images/8834/large/Chiliz.png?1561970540"
    },
    "true-usd": {
        "id": "true-usd",
        "symbol": "tusd",
        "name": "TrueUSD",
        "image": "https://assets.coingecko.com/coins/images/3449/large/tusd.png?1618395665"
    },
    "bitcoin-cash-sv": {
        "id": "bitcoin-cash-sv",
        "symbol": "bsv",
        "name": "Bitcoin SV",
        "image": "https://assets.coingecko.com/coins/images/6799/large/BSV.png?1558947902"
    },
    "compound-usd-coin": {
        "id": "compound-usd-coin",
        "symbol": "cusdc",
        "name": "cUSDC",
        "image": "https://assets.coingecko.com/coins/images/9442/large/Compound_USDC.png?1567581577"
    },
    "terra-luna-2": {
        "id": "terra-luna-2",
        "symbol": "luna",
        "name": "Terra",
        "image": "https://assets.coingecko.com/coins/images/25767/large/01_Luna_color.png?1653556122"
    },
    "paxos-standard": {
        "id": "paxos-standard",
        "symbol": "usdp",
        "name": "Pax Dollar",
        "image": "https://assets.coingecko.com/coins/images/6013/large/Pax_Dollar.png?1629877204"
    },
    "kucoin-shares": {
        "id": "kucoin-shares",
        "symbol": "kcs",
        "name": "KuCoin",
        "image": "https://assets.coingecko.com/coins/images/1047/large/sa9z79.png?1610678720"
    },
    "bittorrent": {
        "id": "bittorrent",
        "symbol": "btt",
        "name": "BitTorrent",
        "image": "https://assets.coingecko.com/coins/images/22457/large/btt_logo.png?1643857231"
    },
    "the-graph": {
        "id": "the-graph",
        "symbol": "grt",
        "name": "The Graph",
        "image": "https://assets.coingecko.com/coins/images/13397/large/Graph_Token.png?1608145566"
    },
    "ecash": {
        "id": "ecash",
        "symbol": "xec",
        "name": "eCash",
        "image": "https://assets.coingecko.com/coins/images/16646/large/Logo_final-22.png?1628239446"
    },
    "zcash": {
        "id": "zcash",
        "symbol": "zec",
        "name": "Zcash",
        "image": "https://assets.coingecko.com/coins/images/486/large/circle-zcash-color.png?1547034197"
    },
    "huobi-btc": {
        "id": "huobi-btc",
        "symbol": "hbtc",
        "name": "Huobi BTC",
        "image": "https://assets.coingecko.com/coins/images/12407/large/Unknown-5.png?1599624896"
    },
    "iota": {
        "id": "iota",
        "symbol": "miota",
        "name": "IOTA",
        "image": "https://assets.coingecko.com/coins/images/692/large/IOTA_Swirl.png?1604238557"
    },
    "evmos": {
        "id": "evmos",
        "symbol": "evmos",
        "name": "Evmos",
        "image": "https://assets.coingecko.com/coins/images/24023/large/evmos.png?1653958927"
    },
    "havven": {
        "id": "havven",
        "symbol": "snx",
        "name": "Synthetix Network",
        "image": "https://assets.coingecko.com/coins/images/3406/large/SNX.png?1598631139"
    },
    "huobi-token": {
        "id": "huobi-token",
        "symbol": "ht",
        "name": "Huobi",
        "image": "https://assets.coingecko.com/coins/images/2822/large/huobi-token-logo.png?1547036992"
    },
    "usdd": {
        "id": "usdd",
        "symbol": "usdd",
        "name": "USDD",
        "image": "https://assets.coingecko.com/coins/images/25380/large/UUSD.jpg?1651823371"
    },
    "fantom": {
        "id": "fantom",
        "symbol": "ftm",
        "name": "Fantom",
        "image": "https://assets.coingecko.com/coins/images/4001/large/Fantom.png?1558015016"
    },
    "maker": {
        "id": "maker",
        "symbol": "mkr",
        "name": "Maker",
        "image": "https://assets.coingecko.com/coins/images/1364/large/Mark_Maker.png?1585191826"
    },
    "neo": {
        "id": "neo",
        "symbol": "neo",
        "name": "NEO",
        "image": "https://assets.coingecko.com/coins/images/480/large/NEO_512_512.png?1594357361"
    },
    "klay-token": {
        "id": "klay-token",
        "symbol": "klay",
        "name": "Klaytn",
        "image": "https://assets.coingecko.com/coins/images/9672/large/klaytn.png?1660288824"
    },
    "cdai": {
        "id": "cdai",
        "symbol": "cdai",
        "name": "cDAI",
        "image": "https://assets.coingecko.com/coins/images/9281/large/cDAI.png?1576467585"
    },
    "terrausd": {
        "id": "terrausd",
        "symbol": "ustc",
        "name": "TerraClassicUSD",
        "image": "https://assets.coingecko.com/coins/images/12681/large/UST.png?1653548090"
    },
    "neutrino": {
        "id": "neutrino",
        "symbol": "usdn",
        "name": "Neutrino USD",
        "image": "https://assets.coingecko.com/coins/images/10117/large/78GWcZu.png?1600845716"
    },
    "bitdao": {
        "id": "bitdao",
        "symbol": "bit",
        "name": "BitDAO",
        "image": "https://assets.coingecko.com/coins/images/17627/large/rI_YptK8.png?1653983088"
    },
    "gatechain-token": {
        "id": "gatechain-token",
        "symbol": "gt",
        "name": "Gate",
        "image": "https://assets.coingecko.com/coins/images/8183/large/gt.png?1556085624"
    },
    "osmosis": {
        "id": "osmosis",
        "symbol": "osmo",
        "name": "Osmosis",
        "image": "https://assets.coingecko.com/coins/images/16724/large/osmo.png?1632763885"
    },
    "helium": {
        "id": "helium",
        "symbol": "hnt",
        "name": "Helium",
        "image": "https://assets.coingecko.com/coins/images/4284/large/Helium_HNT.png?1612620071"
    },
    "rocket-pool": {
        "id": "rocket-pool",
        "symbol": "rpl",
        "name": "Rocket Pool",
        "image": "https://assets.coingecko.com/coins/images/2090/large/rocket_pool_%28RPL%29.png?1637662441"
    },
    "defichain": {
        "id": "defichain",
        "symbol": "dfi",
        "name": "DeFiChain",
        "image": "https://assets.coingecko.com/coins/images/11757/large/symbol-defi-blockchain_200.png?1597306538"
    },
    "compound-ether": {
        "id": "compound-ether",
        "symbol": "ceth",
        "name": "cETH",
        "image": "https://assets.coingecko.com/coins/images/10643/large/ceth2.JPG?1581389598"
    },
    "pancakeswap-token": {
        "id": "pancakeswap-token",
        "symbol": "cake",
        "name": "PancakeSwap",
        "image": "https://assets.coingecko.com/coins/images/12632/large/pancakeswap-cake-logo_%281%29.png?1629359065"
    },
    "ravencoin": {
        "id": "ravencoin",
        "symbol": "rvn",
        "name": "Ravencoin",
        "image": "https://assets.coingecko.com/coins/images/3412/large/ravencoin.png?1548386057"
    },
    "thorchain": {
        "id": "thorchain",
        "symbol": "rune",
        "name": "THORChain",
        "image": "https://assets.coingecko.com/coins/images/6595/large/RUNE.png?1614160507"
    },
    "radix": {
        "id": "radix",
        "symbol": "xrd",
        "name": "Radix",
        "image": "https://assets.coingecko.com/coins/images/4374/large/Radix.png?1629701658"
    },
    "celsius-degree-token": {
        "id": "celsius-degree-token",
        "symbol": "cel",
        "name": "Celsius Network",
        "image": "https://assets.coingecko.com/coins/images/3263/large/CEL_logo.png?1609598753"
    },
    "zilliqa": {
        "id": "zilliqa",
        "symbol": "zil",
        "name": "Zilliqa",
        "image": "https://assets.coingecko.com/coins/images/2687/large/Zilliqa-logo.png?1547036894"
    },
    "pax-gold": {
        "id": "pax-gold",
        "symbol": "paxg",
        "name": "PAX Gold",
        "image": "https://assets.coingecko.com/coins/images/9519/large/paxg.PNG?1568542565"
    },
    "arweave": {
        "id": "arweave",
        "symbol": "ar",
        "name": "Arweave",
        "image": "https://assets.coingecko.com/coins/images/4343/large/oRt6SiEN_400x400.jpg?1591059616"
    },
    "enjincoin": {
        "id": "enjincoin",
        "symbol": "enj",
        "name": "Enjin Coin",
        "image": "https://assets.coingecko.com/coins/images/1102/large/enjin-coin-logo.png?1547035078"
    },
    "dash": {
        "id": "dash",
        "symbol": "dash",
        "name": "Dash",
        "image": "https://assets.coingecko.com/coins/images/19/large/dash-logo.png?1548385930"
    },
    "nexo": {
        "id": "nexo",
        "symbol": "nexo",
        "name": "NEXO",
        "image": "https://assets.coingecko.com/coins/images/3695/large/nexo.png?1548086057"
    },
    "basic-attention-token": {
        "id": "basic-attention-token",
        "symbol": "bat",
        "name": "Basic Attention",
        "image": "https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png?1547034427"
    },
    "waves": {
        "id": "waves",
        "symbol": "waves",
        "name": "Waves",
        "image": "https://assets.coingecko.com/coins/images/425/large/waves.png?1548386117"
    },
    "blockstack": {
        "id": "blockstack",
        "symbol": "stx",
        "name": "Stacks",
        "image": "https://assets.coingecko.com/coins/images/2069/large/Stacks_logo_full.png?1604112510"
    },
    "tokenize-xchange": {
        "id": "tokenize-xchange",
        "symbol": "tkx",
        "name": "Tokenize Xchange",
        "image": "https://assets.coingecko.com/coins/images/4984/large/Tokenize.png?1561602968"
    },
    "kusama": {
        "id": "kusama",
        "symbol": "ksm",
        "name": "Kusama",
        "image": "https://assets.coingecko.com/coins/images/9568/large/m4zRhP5e_400x400.jpg?1576190080"
    },
    "curve-dao-token": {
        "id": "curve-dao-token",
        "symbol": "crv",
        "name": "Curve DAO",
        "image": "https://assets.coingecko.com/coins/images/12124/large/Curve.png?1597369484"
    },
    "frax-share": {
        "id": "frax-share",
        "symbol": "fxs",
        "name": "Frax Share",
        "image": "https://assets.coingecko.com/coins/images/13423/large/frax_share.png?1608478989"
    }
};
export default coins