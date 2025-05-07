"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"
import { useExpenses } from "@/hooks/use-expenses"

export function ExpensePieChart() {
  const { expenses } = useExpenses()

  // Generate sample data if no expenses
  const data = expenses.length > 0 ? generateDataFromExpenses(expenses) : generateSampleData()

  const COLORS = ["#10b981", "#0ea5e9", "#8b5cf6", "#f59e0b", "#ef4444", "#ec4899"]

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <Card className="p-2 border shadow-sm bg-background">
                    <div className="text-sm font-medium">{payload[0].name}</div>
                    <div className="text-sm font-bold" style={{ color: payload[0].payload.fill }}>
                      ${payload[0].value?.toFixed(2)}
                    </div>
                  </Card>
                )
              }
              return null
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

function generateDataFromExpenses(expenses) {
  // Group expenses by category and sum amounts
  const groupedData = expenses.reduce((acc, expense) => {
    const category = expense.category || "Other"

    if (!acc[category]) {
      acc[category] = 0
    }

    acc[category] += expense.amount
    return acc
  }, {})

  // Convert to array format for chart
  return Object.entries(groupedData).map(([name, value]) => ({
    name: formatCategoryName(name),
    value,
  }))
}

function formatCategoryName(category) {
  // Convert camelCase or snake_case to Title Case
  return category
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())
}

function generateSampleData() {
  return [
    { name: "Food", value: 0 },
    { name: "Transportation", value: 0 },
    { name: "Shopping", value: 0 },
    { name: "Entertainment", value: 0 },
    { name: "Utilities", value: 0 },
    { name: "Other", value: 0 },
  ]
}
