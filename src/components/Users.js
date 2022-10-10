import * as data from '../api/server'
const dataArray = data.data
const Users = () => {
    const calcPoints = (user) => {
        const transactions = user.transactions
        var points = 0
        for (let i = 0; i < transactions.length; i++){
            const cost = transactions[i].cost
            if (cost < 50) {
            } else if (cost < 100 || cost === 100) {
                points = points + (cost - 50)
            } else {
                points = points + ((cost - 100)*2)
            }
        }
        return points
    }
    for (let i = 0; i < dataArray.length; i++){
        dataArray[i].points = calcPoints(dataArray[i]).toFixed(2)
    }
}

export default Users