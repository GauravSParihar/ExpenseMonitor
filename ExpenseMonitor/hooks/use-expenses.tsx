"use client"

import { createContext, useContext, useState, useEffect } from "react"

// No sample data - start with empty array
const sampleExpenses = []

// Create context
const ExpenseContext = createContext(null)

// Provider component
export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([])
  const [totalExpenses, setTotalExpenses] = useState(0)

  // Load expenses from localStorage on mount
  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses")
    if (storedExpenses) {
      try {
        const parsedExpenses = JSON.parse(storedExpenses)
        // Convert date strings back to Date objects
        const expensesWithDates = parsedExpenses.map((expense) => ({
          ...expense,
          date: new Date(expense.date),
        }))
        setExpenses(expensesWithDates)
      } catch (error) {
        console.error("Failed to parse expenses from localStorage", error)
        setExpenses([]) // Start with empty array on error
      }
    } else {
      setExpenses([]) // Start with empty array if no localStorage data
    }
  }, [])

  // Update total whenever expenses change
  useEffect(() => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    setTotalExpenses(total)

    // Save to localStorage
    try {
      localStorage.setItem("expenses", JSON.stringify(expenses))
    } catch (error) {
      console.error("Failed to save expenses to localStorage", error)
    }
  }, [expenses])

  // Add a new expense
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense])
  }

  // Delete an expense
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id))
  }

  // Update an expense
  const updateExpense = (id, updatedExpense) => {
    setExpenses((prev) => prev.map((expense) => (expense.id === id ? { ...expense, ...updatedExpense } : expense)))
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        totalExpenses,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  )
}

// Custom hook to use the expense context
export function useExpenses() {
  const context = useContext(ExpenseContext)
  if (!context) {
    throw new Error("useExpenses must be used within an ExpenseProvider")
  }
  return context
}
