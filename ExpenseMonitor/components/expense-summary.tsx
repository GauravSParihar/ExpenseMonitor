"use client"

import { useExpenses } from "@/hooks/use-expenses"

export function ExpenseSummary() {
  const { expenses } = useExpenses()

  // Calculate summary statistics
  const stats = calculateStats(expenses)

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Total Expenses</div>
          <div className="text-2xl font-bold">${stats.total.toFixed(2)}</div>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Average Expense</div>
          <div className="text-2xl font-bold">${stats.average.toFixed(2)}</div>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Highest Expense</div>
          <div className="text-2xl font-bold">${stats.highest.toFixed(2)}</div>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Total Entries</div>
          <div className="text-2xl font-bold">{stats.count}</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Category Breakdown</div>
        <div className="space-y-2">
          {Object.entries(stats.categories).map(([category, amount]) => (
            <div key={category} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-sm">{formatCategoryName(category)}</span>
              </div>
              <div className="text-sm font-medium">${amount.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function calculateStats(expenses) {
  if (!expenses.length) {
    return {
      total: 0,
      average: 0,
      highest: 0,
      count: 0,
      categories: {
        food: 0,
        transportation: 0,
        entertainment: 0,
        utilities: 0,
        shopping: 0,
        other: 0,
      },
    }
  }

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const average = total / expenses.length
  const highest = Math.max(...expenses.map((expense) => expense.amount))

  // Group by category
  const categories = expenses.reduce((acc, expense) => {
    const category = expense.category || "other"
    acc[category] = (acc[category] || 0) + expense.amount
    return acc
  }, {})

  return {
    total,
    average,
    highest,
    count: expenses.length,
    categories,
  }
}

function formatCategoryName(category) {
  return category
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())
}
