"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"
import { useExpenses } from "@/hooks/use-expenses"

export function ExpenseChart() {
  const { expenses } = useExpenses()

  // Generate sample data if no expenses
  const data = expenses.length > 0 ? generateDataFromExpenses(expenses) : generateSampleData()

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <Card className="p-2 border shadow-sm bg-background">
                    <div className="text-sm font-medium">{payload[0].payload.name}</div>
                    <div className="text-sm text-emerald-600 font-bold">${payload[0].value?.toFixed(2)}</div>
                  </Card>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function generateDataFromExpenses(expenses) {
  // Group expenses by date and sum amounts
  const groupedData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })

    if (!acc[date]) {
      acc[date] = 0
    }

    acc[date] += expense.amount
    return acc
  }, {})

  // Convert to array format for chart
  return Object.entries(groupedData).map(([name, amount]) => ({
    name,
    amount,
  }))
}

function generateSampleData() {
  // Return empty data for initial state
  const today = new Date()
  const days = []
  for (let i = 6; i >= 0; i--) {
    const date = new Date()
    date.setDate(today.getDate() - i)
    days.push({
      name: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      amount: 0,
    })
  }
  return days
}
