import find from '../api/GETbyID'
import * as data from '../api/GET'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/UserPage.css'

const UserPage = () => {
    const dataArray = data.data
    const id = window.location.href.split('/')[4]
    const user = find(id, dataArray)

    const getMonthRange = () => {
        const currentDate = new Date()
        const currentMonth = currentDate.getMonth() + 1

        const monthRange = []

        let monthPrevious = currentMonth - 1 
        if (monthPrevious < 0) {
            monthPrevious = 12 + monthPrevious
        }
        let monthPreviousPrevious = currentMonth - 2
        if (monthPreviousPrevious < 0) {
            monthPreviousPrevious = 12 + monthPreviousPrevious
        }

        monthRange.push(monthPreviousPrevious)
        monthRange.push(monthPrevious)
        monthRange.push(currentMonth)
        
        return monthRange
    }

    const monthRange = getMonthRange()
    let currentMonthPoints = 0
    let previousMonthPoints = 0
    let previousPreviousMonthPoints = 0

    const dateSort = (transaction) => {
        let transactionMonth = transaction.date.split('-')[1]
        if (transactionMonth < 10){
            transactionMonth = transactionMonth.split('')[1]
        }
        transactionMonth = parseInt(transactionMonth)
        switch(transactionMonth) {
            case (monthRange[2]):
                currentMonthPoints = parseFloat(currentMonthPoints) + parseFloat(transaction.points)
                break
            case (monthRange[1]):
                previousMonthPoints = parseFloat(previousMonthPoints) + parseFloat(transaction.points)
                break
            case (monthRange[0]):
                previousPreviousMonthPoints = parseFloat(previousPreviousMonthPoints) + parseFloat(transaction.points)
                break
            default:
                break
        }
    }
    const calcPoints = (user) => {
        const transactions = user.transactions
        let points = 0
        for (let i = 0; i < transactions.length; i++){
            const cost = transactions[i].cost
            if (cost < 50) {
                points = points + 0
                user.transactions[i].points = 0
            } else if ((cost > 50 && cost < 100) || cost === 100) {
                points = points + (cost - 50)
                user.transactions[i].points = (cost - 50).toFixed(2)
            } else if (cost > 100){
                points = points + ((cost - 100)*2)
                points = points + ((cost - (cost - 100)) - 50)
                user.transactions[i].points = ((cost - 100)*2)
                user.transactions[i].points = (user.transactions[i].points + ((cost - (cost - 100)) - 50)).toFixed(2)
            }
            dateSort(transactions[i])
        }
        return points
    }
    user.points = calcPoints(user).toFixed(2)

    const groupMonthlyPoints = () => {
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const currentMonthName = months[monthRange[2] - 1]
        const previousMonthName = months[monthRange[1] - 1]
        const previousPreviousMonthName = months[monthRange[0] - 1]

        return {
            currentMonth:{
                month: monthRange[2],
                monthName: currentMonthName,
                points: currentMonthPoints
            },
            previousMonth:{
                month: monthRange[1],
                monthName: previousMonthName,
                points: previousMonthPoints
            },
            previousPreviousMonth:{
                month: monthRange[0],
                monthName: previousPreviousMonthName,
                points: previousPreviousMonthPoints
            }
        }
    }
    const groupedMonthlyPoints = groupMonthlyPoints()
    
    return(
        <div>
            <Link to = '/'>Return</Link> 
            <h1>{user.name}</h1>
            <h2>Total points: {user.points}</h2>
            <h3>{groupedMonthlyPoints.currentMonth.monthName} points: {groupedMonthlyPoints.currentMonth.points}</h3>
            <h3>{groupedMonthlyPoints.previousMonth.monthName} points: {groupedMonthlyPoints.previousMonth.points}</h3>
            <h3>{groupedMonthlyPoints.previousPreviousMonth.monthName} points: {groupedMonthlyPoints.previousPreviousMonth.points}</h3>
            <h4>Transaction history:</h4>
            <table>
            <tbody>
            <tr>
                <th>Purchase</th>
                <th>Amount</th>
                <th>Points</th>
                <th>Date</th>
            </tr>
            {user.transactions.map(i => (
                <tr>
                <td>{i.purchase}</td>
                <td>Amount spent: ${i.cost}</td>
                <td>Points gained: {i.points}</td>
                <td>{i.date}</td>
            </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}

export default UserPage