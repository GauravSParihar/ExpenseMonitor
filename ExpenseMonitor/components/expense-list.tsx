"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { format } from "date-fns"
import { DollarSign, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useExpenses } from "@/hooks/use-expenses"

export function ExpenseList({ expenses = [] }) {
  const { deleteExpense } = useExpenses()
  const [expandedId, setExpandedId] = useState(null)

  const getCategoryColor = (category) => {
    const colors = {
      food: "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-400",
      transportation: "bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-400",
      entertainment: "bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:text-purple-400",
      utilities: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-400",
      shopping: "bg-pink-100 text-pink-800 dark:bg-pink-800/30 dark:text-pink-400",
      housing: "bg-orange-100 text-orange-800 dark:bg-orange-800/30 dark:text-orange-400",
      health: "bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400",
      travel: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-400",
      education: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/30 dark:text-cyan-400",
      other: "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
    }
    return colors[category] || colors.other
  }

  const formatCategoryName = (category) => {
    return category
      .replace(/([A-Z])/g, " $1")
      .replace(/_/g, " ")
      .replace(/^\w/, (c) => c.toUpperCase())
  }

  if (expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
          <DollarSign className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-lg font-medium mb-1">No expenses recorded yet</h3>
        <p className="text-muted-foreground mb-4 max-w-md">
          Start tracking your expenses by adding your first entry. Your data will be saved locally on your device.
        </p>
        <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
          <a href="/dashboard/add">Add your first expense</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {expenses.map((expense) => (
          <motion.div
            key={expense.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => setExpandedId(expandedId === expense.id ? null : expense.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                    <span className="font-medium text-emerald-700 dark:text-emerald-300">
                      ${expense.amount.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{expense.description || "Expense"}</div>
                    <div className="text-sm text-muted-foreground">
                      {expense.date instanceof Date
                        ? format(expense.date, "MMM d, yyyy")
                        : format(new Date(expense.date), "MMM d, yyyy")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getCategoryColor(expense.category)}>{formatCategoryName(expense.category)}</Badge>
                </div>
              </div>
              {expandedId === expense.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 pt-4 border-t flex justify-end gap-2"
                >
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Edit className="h-3.5 w-3.5" />
                    <span>Edit</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1 text-red-500 hover:text-red-600"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteExpense(expense.id)
                    }}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Delete</span>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
