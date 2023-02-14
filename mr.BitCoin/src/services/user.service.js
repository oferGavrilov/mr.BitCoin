import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"

const USERS_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser'

_createUsers()

export const userService = {
    getUser,
    transferFunds,
    getTransactions,
    getEmptyTransfer,
    getEmptyUser,
    login,
}

async function transferFunds(transfer) {
    const user = getUser()
    user.balance -= transfer.amount
    user.transactions.push(transfer)
    try {
        await _save(user)
        saveLocalUser(user)
    } catch (err) {
        throw err
    }
}

function getTransactions() {
    const user = getUser()
    return user.transactions
}

async function login(user) {
    const users = await _query()
    const loggedInUser = users.find(currUser => currUser.name === user.name)
    if (loggedInUser) return saveLocalUser(loggedInUser)
    user = await _save(user)
    saveLocalUser(user)
}

function getEmptyUser() {
    return {
        name: '',
        balance: 100,
        transactions: [],
    }
}

function getEmptyTransfer() {
    return {
        toId: "",
        to: "",
        at: Date.now(),
        amount: 0
    }
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

async function _query() {
    return await storageService.query(USERS_KEY)
}

function _save(user) {
    if (user._id) return storageService.put(USERS_KEY, user)
    return storageService.post(USERS_KEY, user)
}

function _createUsers() {
    let users = utilService.loadFromStorage(USERS_KEY)
    if (!users || !users.length) {
        users = [
            {
                _id: '1001',
                name: "Puki Ben David",
                balance: 100,
                transactions: [
                    {
                        toId: "d99e3u2ih329",
                        to: "Moshiko",
                        at: 2652712571,
                        amount: 2
                    },
                ]
            }
        ]
        utilService.saveToStorage(USERS_KEY, users)
    }
}