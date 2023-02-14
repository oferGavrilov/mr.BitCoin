'use strict'

export const utilService = {
    makeId,
    getRandomInt,
    saveToStorage,
    loadFromStorage,
    getMonthName,
    calculateTime
}

function getMonthName(date) {
    const monthNames = ["Jan`", "Feb`", "March", "April", "May", "June",
        "July", "Aug`", "Sep`", "Oct`", "Nov`", "Dec`"
    ]
    return monthNames[date.getMonth()]
}

function makeId() {
    var pt1 = Date.now().toString(16)
    var pt2 = getRandomInt(1000, 9999).toString(16)
    var pt3 = getRandomInt(1000, 9999).toString(16)
    return `${pt3}-${pt1}-${pt2}`.toUpperCase()
}

function calculateTime(time) {
    const currentTime = new Date().getTime()
    const timeDiff = Math.floor((currentTime - time) / 60000)
    if(timeDiff >= 60 * 24 * 7) {
        const week = Math.floor(timeDiff / (60 * 24 * 7))
        return `${week}w`
    } else if(timeDiff >= 60 * 24) {
        const day = Math.floor(timeDiff / (60 * 24))
        return `${day}d`
    } else if (timeDiff >= 60) {
      const hours = Math.floor(timeDiff / 60)
      return `${hours}h`
    } else if(timeDiff >= 2) {
        const minutes = timeDiff % 60
        return `${minutes}m`
    } else return 'now' 
}

function getRandomInt(num1, num2) {
    var max = num1 >= num2 ? num1 + 1 : num2 + 1
    var min = num1 <= num2 ? num1 : num2
    return Math.floor(Math.random() * (max - min)) + min
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null)
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}