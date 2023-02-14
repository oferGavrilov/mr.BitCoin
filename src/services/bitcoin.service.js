import axios from 'axios'
import { userService } from './user.service'
import { utilService } from './util.service'

const RATE_STORAGE_KEY = 'rateDB'
const HISTORY_KEY = 'historyDB'
const AVG_KEY = 'avgDB'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

function getRate() {
    return _getInfo(`https://blockchain.info/tobtc?currency=USD&value=${userService.getUser().balance}`, RATE_STORAGE_KEY)
}

function getMarketPriceHistory() {
    return _getInfo('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true', HISTORY_KEY)
}

function getAvgBlockSize() {
    return _getInfo('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true', AVG_KEY)
}

function _getInfo(url, key) {
    const info = utilService.loadFromStorage(key)
    if (info) return Promise.resolve(info)
    return axios.get(url)
        .then(info => {
            utilService.saveToStorage(key, info.data)
            return info.data
        })
}