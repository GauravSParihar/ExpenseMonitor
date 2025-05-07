"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"
import { useExpenses } from "@/hooks/use-expenses"

export function ExpenseBarChart() {
  const { expenses } = useExpenses()

  // Generate sample data if no expenses
  const data = expenses.length > 0 ? generateDataFromExpenses(expenses) : generateSampleData()

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <Card className="p-2 border shadow-sm bg-background">
                    <div className="text-sm font-medium">{label}</div>
                    <div className="text-sm text-emerald-600 font-bold">${payload[0].value?.toFixed(2)}</div>
                  </Card>
                )
              }
              return null
            }}
          />
          <Bar dataKey="amount" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function generateDataFromExpenses(expenses) {
  // Group expenses by month and sum amounts
  const groupedData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date)
    const month = date.toLocaleDateString("en-US", { month: "short" })

    if (!acc[month]) {
      acc[month] = 0
    }

    acc[month] += expense.amount
    return acc
  }, {})

  // Convert to array format for chart
  return Object.entries(groupedData).map(([name, amount]) => ({
    name,
    amount,
  }))
}

function generateSampleData() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  return months.map((month) => ({ name: month, amount: 0 }))
}
