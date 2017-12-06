var verbose = false

const Bitcoin = require('./services/Bitcoin')
const Dash = require('./services/Dash')
const EthereumClassic = require('./services/EthereumClassic')
const Syndicate = require('./services/Syndicate')

const CryptoidBaseService = require('./services/_cryptoidBase')
//const Ethereum = require('./services/Ethereum')

var util = require("util"),
    _ = require("underscore"),
    request    = require("request"),
    crypto = require("crypto"),
    VError = require("verror")
//    md5 = require("MD5")

var CryptocurrencyExplorer = function CryptocurrencyExplorer(currency)
{
    switch (currency.toUpperCase()) {
        // Single coins
        case "BITCOIN":
        case "BTC":
            return new Bitcoin()
        case "DASH":
            return new Dash()
        case "ETHEREUMCLASSIC":
        case "ETC":
        case "Ethereum Classic":
            return new EthereumClassic()
            break
        case "SYNDICATE":
        case "SYNX":
            return new Syndicate()
            break

        // Cryptoid Coins
        case "1337":
        case "1337":
        case "2GIVE":
        case "2GIVE":
        case "42":
        case "42-COIN":
        case "8BIT":
        case "8BIT":
        case "AC":
        case "ASIACOIN":
        case "ABC":
        case "ABCBLOCKCHAIN":
        case "ADC":
        case "AUDIOCOIN":
        case "ANC":
        case "ANONCOIN":
        case "ARCO":
        case "AQUARIUSCOIN":
        case "ARG":
        case "ARGENTUM":
        case "ATMS":
        case "ATMOS":
        case "ATOM":
        case "ATOMICCOIN":
        case "B3":
        case "B3COIN":
        case "BASH":
        case "LUCKCHAIN":
        case "BAY":
        case "BITBAY":
        case "BCC":
        case "BITCONNECTCOIN":
        case "BEE2":
        case "BEECOINV2":
        case "BELA":
        case "BELACOIN":
        case "BIGUP":
        case "BIGUP":
        case "BITB":
        case "BITBEAN":
        case "BTCI":
        case "BITCOIN-I":
        case "BLITZ":
        case "BLITZCASH":
        case "BLK":
        case "BLACKCOIN":
        case "BLOCK":
        case "BLOCKNET":
        case "BLOCK-OLD":
        case "BLOCKNETOLDCHAIN":
        case "BOLI":
        case "BOLIVARCOIN":
        case "BRIT":
        case "BRITCOIN":
        case "BRO":
        case "BITRADIO":
        case "BSD":
        case "BITSEND":
        case "BTA":
        case "BATA":
        case "BTD":
        case "BITCLOUDOLD":
        case "BTDX":
        case "BITCLOUD":
        case "BTG":
        case "BITGEM":
        case "BTM":
        case "BITMARK":
        case "BTX":
        case "BITCORE":
        case "BUCKS":
        case "SWAGBUCKS":
        case "BXT":
        case "BITTOKEN":
        case "BYC":
        case "BYTECENT":
        case "CACH":
        case "CACHECOIN":
        case "CANN":
        case "CANNABISCOIN":
        case "C2":
        case "COIN2.1":
        case "CARBON":
        case "CARBONCOIN":
        case "CBX":
        case "CRYPTOBULLION":
        case "CCC":
        case "CREDITCASHCOIN":
        case "CCN":
        case "CANNACOIN":
        case "CHAO":
        case "23SKIDOO":
        case "CHBT":
        case "CHBTOKEN":
        case "CLUB":
        case "CLUBCOIN":
        case "CNC":
        case "CHNCOIN":
        case "CNO":
        case "COINO":
        case "CORG":
        case "CORGICOIN":
        case "CPC":
        case "CAPRICOIN":
        case "CREA":
        case "CREATIVECOIN":
        case "CRYPT":
        case "CRYPTCOIN":
        case "CRW":
        case "CROWN":
        case "CURE":
        case "CURECOIN":
        case "DASH":
        case "DASH":
        case "DGB":
        case "DIGIBYTE":
        case "DGC":
        case "DIGITALCOIN":
        case "DIME":
        case "DIMECOIN":
        case "DMD":
        case "DIAMOND":
        case "DNR":
        case "DENARIUS":
        case "DOLLAR":
        case "DOLLARONLINE":
        case "DOPE":
        case "DOPECOIN":
        case "DOT":
        case "DOTCOIN":
        case "DRS":
        case "DIGITALRUPEES":
        case "DRZ":
        case "DROIDZ":
        case "DTC":
        case "DATACOIN":
        case "DVC":
        case "DEVCOIN":
        case "EAC":
        case "EARTHCOIN":
        case "EBC":
        case "EBULLIONCOIN":
        case "EC":
        case "ECLIPSE":
        case "ECC":
        case "ECCOIN":
        case "ECN":
        case "E-COIN":
        case "EFL":
        case "E-GULDEN":
        case "EGC":
        case "EVERGREENCOIN":
        case "EGCC":
        case "EGOLDCRYPTO":
        case "EMC2":
        case "EINSTEINIUM":
        case "EMD":
        case "EMERALD":
        case "ENRG":
        case "ENERGYCOIN":
        case "ENT":
        case "ETERNITY":
        case "EQT":
        case "EQUITRADER":
        case "ERC":
        case "EUROPECOIN":
        case "ERY":
        case "ERYLLIUM":
        case "FAIL":
        case "FAILCOIN":
        case "FLAX":
        case "FLAXSCRIPT":
        case "FUEL":
        case "FUELCOIN":
        case "FUNK":
        case "THECYPHERFUNKS":
        case "GAM":
        case "GAMBIT":
        case "GAP":
        case "GAPCOIN":
        case "GCR":
        case "GLOBALCURRENCYRESERVE":
        case "GEO":
        case "GEOCOIN":
        case "GLC":
        case "GLOBALCOIN":
        case "GLD":
        case "GOLDCOIN":
        case "GRE":
        case "GREENCOIN":
        case "GRN":
        case "GRANITE":
        case "GRS":
        case "GROESTLCOIN":
        case "GRS-TEST":
        case "GROESTLCOINTESTNET":
        case "GRT":
        case "GRANTCOIN":
        case "GUN":
        case "GUNCOIN":
        case "HBN":
        case "HOBONICKELS":
        case "HXX":
        case "HEXXCOIN":
        case "I0C":
        case "I0COIN":
        case "ICN":
        case "ICOIN":
        case "IMX":
        case "IMPACT":
        case "INFX":
        case "INFLUX":
        case "INSN":
        case "INSANECOIN(NEW)":
        case "IOC":
        case "I/OCOIN":
        case "ION":
        case "ION":
        case "ION-OLD":
        case "IONOLD":
        case "ITC":
        case "ITITANIUMCOIN":
        case "IXC":
        case "IXCOIN":
        case "J":
        case "JOINCOIN":
        case "KARM":
        case "KARMA":
        case "KNC":
        case "KINGNCOIN":
        case "KOBO":
        case "KOBOCOIN":
        case "KORE":
        case "KORE":
        case "KORUNA":
        case "KORUNA":
        case "KUSH":
        case "KUSHCOIN":
        case "LANA":
        case "LANACOIN":
        case "LIR":
        case "LETITRIDE":
        case "LOC":
        case "LOCO":
        case "LTC":
        case "LITECOIN":
        case "LUX":
        case "LUXCOIN":
        case "MAC":
        case "MACHINECOIN":
        case "MAY":
        case "THERESAMAYCOIN":
        case "MBCH":
        case "MILLIONBITCOINCASH":
        case "MEC":
        case "MEGACOIN":
        case "MEOW":
        case "KITTEHCOIN":
        case "MND":
        case "MINDCOIN":
        case "MOJO3":
        case "MOJOCOINV3":
        case "MOON":
        case "MOONCOIN":
        case "MSCN":
        case "MASTERSWISCOIN":
        case "MST":
        case "MUSTANGCOIN":
        case "MUE":
        case "MONETARYUNIT":
        case "MUE-OLD":
        case "MONETARYUNITOLD":
        case "NAV":
        case "NAVCOIN":
        case "NED":
        case "NOTEVILDIME":
        case "NEOS":
        case "NEOSCOIN":
        case "NETKO":
        case "NETKO":
        case "NEVA":
        case "NEVACOIN":
        case "NOBL":
        case "NOBLECOIN":
        case "NOTE":
        case "DNOTES":
        case "NPC":
        case "NPCCOIN":
        case "NRO":
        case "NEURO":
        case "NXX":
        case "NEXXUSCOIN":
        case "OC":
        case "OC":
        case "OCTO":
        case "OCTOCOIN":
        case "OFF":
        case "CTHULHUOFFERINGS":
        case "OK":
        case "OKCASH":
        case "OPAL":
        case "OPALCOIN":
        case "OZC":
        case "OZZIECOIN":
        case "PAK":
        case "PAKCOIN":
        case "PART":
        case "PARTICL":
        case "PHO":
        case "PHOTON":
        case "PHR":
        case "PHORE":
        case "PIGGY":
        case "PIGGYCOIN":
        case "PINK":
        case "PINKCOIN":
        case "PIVX":
        case "PIVX":
        case "PND":
        case "PANDACOIN":
        case "POKER":
        case "POKERCOIN":
        case "POST":
        case "POSTCOIN":
        case "POT":
        case "POTCOIN":
        case "PPC":
        case "PEERCOIN":
        case "PPC-TEST":
        case "PEERCOINTESTNET":
        case "PR":
        case "PROTOTANIUM":
        case "PSB":
        case "PESOBIT":
        case "PTC":
        case "PESETACOIN":
        case "PURA":
        case "PURA":
        case "PUT":
        case "PUTINCOIN":
        case "PX":
        case "PX":
        case "PXI":
        case "PRIME-XI":
        case "PWC":
        case "PLAYWINCOIN":
        case "QRK":
        case "QUARK":
        case "RADS":
        case "RADIUM":
        case "RADS-TEST":
        case "RADIUMTESTNET":
        case "RBC":
        case "REDDBYTECOIN":
        case "RBY":
        case "RUBYCOIN":
        case "RIC":
        case "RIECOIN":
        case "RSGP":
        case "RSGPCOIN":
        case "SBC":
        case "STABLECOIN":
        case "SDC":
        case "SHADOWCASH":
        case "SFR":
        case "SAFFRONCOIN":
        case "SH":
        case "SHILLING":
        case "SHA":
        case "SHACOIN":
        case "SHB":
        case "SHARESHUB":
        case "SLG":
        case "STERLINGCOIN":
        case "SLR":
        case "SOLARCOIN":
        case "SMLY":
        case "SMILEYCOIN":
        case "SNRG":
        case "SYNERGY":
        case "SPR":
        case "SPREADCOIN":
        case "SPRTS":
        case "SPROUTS":
        case "STK":
        case "STAKECOIN":
        case "STRAT":
        case "STRATIS":
        case "STRAT-TEST":
        case "STRATISTESTNET":
        case "STV":
        case "SATIVACOIN":
        case "SUPER":
        case "SUPERCOIN":
        case "SYNC":
        case "SYNC":
        case "SWIFT":
        case "BITSWIFT":
        case "SWING":
        case "SWING":
        case "SYS":
        case "SYSCOIN2.1":
        case "TAJ":
        case "TAJCOIN":
        case "TALK":
        case "BTCTALKCOIN":
        case "TECH":
        case "TECHCOIN":
        case "TES":
        case "TESLACOIN":
        case "TOA":
        case "TOACOIN":
        case "TOR":
        case "TORCOIN":
        case "TROLL":
        case "TROLLCOIN":
        case "TRUMP":
        case "TRUMPCOIN":
        case "TRUST":
        case "TRUSTPLUS":
        case "TX":
        case "TRANSFERCOIN":
        case "UBIQ":
        case "UBIQUOIN":
        case "UFO":
        case "UFOCOIN":
        case "UNI":
        case "UNIVERSE":
        case "UNO":
        case "UNOBTANIUM":
        case "USC":
        case "ULTIMATESECURECASH":
        case "VASH":
        case "VPNCOIN":
        case "VCN":
        case "VCOIN":
        case "VGINA":
        case "VGINA":
        case "VGS":
        case "LASVEGASCOIN":
        case "VIA":
        case "VIACOIN":
        case "VISIO":
        case "VISIO":
        case "VRC":
        case "VERICOIN":
        case "VRM":
        case "VERIUM":
        case "VTC":
        case "VERTCOIN":
        case "VUC":
        case "VIRTAUNIQUECOIN":
        case "WAC":
        case "WACOINS":
        case "WBB":
        case "WILDBEASTBLOCK":
        case "WBC":
        case "WALLETBUILDERCOIN":
        case "WC":
        case "WINCOIN":
        case "WEX":
        case "WEXCOIN":
        case "WORM":
        case "HEALTHYWORMCOIN":
        case "WYV":
        case "WYVERN":
        case "WW":
        case "WAYAWOLFCOIN":
        case "X2C":
        case "XECOIN":
        case "XC":
        case "XCURRENCY":
        case "XJO":
        case "JOULECOIN":
        case "XLR":
        case "SOLARISCOIN":
        case "XMG":
        case "MAGI":
        case "XMY":
        case "MYRIAD":
        case "XP":
        case "EXPERIENCEPOINTS":
        case "XPY":
        case "PAYCOIN":
        case "XQN":
        case "QUOTIENT":
        case "XSPEC":
        case "SPECTRECOIN":
        case "XST":
        case "STEALTHCOIN":
        case "XVP":
        case "VIRTACOINPLUS":
        case "XZC":
        case "ZCOIN":
        case "ZEIT":
        case "ZEITCOIN":
        case "ZET":
        case "ZETACOIN":
        case "ZOI":
        case "ZOIN":
            return new CryptoidBaseService(symbol) 
            break

        default:
            throw new Error("Currency (" + currency + ") not known and/or not implemented yet")
    }
}

module.exports = CryptocurrencyExplorer