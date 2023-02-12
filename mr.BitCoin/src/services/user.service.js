
export const userService = {
    getUser,
}

function getUser() {

    return {
        name: "Puki Ben David",
        balance: 100,
        transactions: []
    }
}