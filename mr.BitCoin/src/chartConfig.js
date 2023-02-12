import { bitcoinService } from "./services/bitcoin.service"

export const data = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',

    ],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: sumData().then(res => res)
        }
    ]
}

async function sumData() {
    const fullData = await bitcoinService.getMarketPriceHistory()
    console.log(fullData)
    let sum = 0
    const temp = fullData.values.reduce((acc , value , idx) => {
        if((idx + 1) % 15 === 0) {
            sum = sum / 15
            acc.push(Math.ceil(sum))
            return acc
        } else sum += value.y
        return acc
    } , [])
    return temp
}

export const options = {
    responsive: true,
    maintainAspectRatio: false
}