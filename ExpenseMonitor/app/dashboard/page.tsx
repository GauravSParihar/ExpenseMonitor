"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, DollarSign, Plus, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExpenseChart } from "@/components/expense-chart"
import { ExpensePieChart } from "@/components/expense-pie-chart"
import { ExpenseList } from "@/components/expense-list"
import { ExpenseSummary } from "@/components/expense-summary"
import { useExpenses } from "@/hooks/use-expenses"

// Helper function to get recent expenses
const getRecentExpenses = (expenses, count = 5) => {
  return [...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count)
}

export default function DashboardPage() {
  const { expenses, totalExpenses, addExpense } = useExpenses()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <DollarSign className="h-6 w-6 text-emerald-600" />
          <span>ExpenseTracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium text-muted-foreground" href="/dashboard/reports">
            Reports
          </Link>
          <Link className="text-sm font-medium text-muted-foreground" href="/dashboard/settings">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <Button asChild size="sm" className="ml-auto h-8 gap-1 bg-emerald-600 hover:bg-emerald-700">
            <Link href="/dashboard/add">
              <Plus className="h-3.5 w-3.5" />
              <span>Add Expense</span>
            </Link>
          </Button>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                      {expenses.length > 0 ? "+20.1% from last month" : "No expenses yet"}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Per Day</CardTitle>
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${(totalExpenses / 30).toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                      {expenses.length > 0 ? "-4% from last month" : "No expenses yet"}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Top Category</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Food</div>
                    <p className="text-xs text-muted-foreground">
                      {expenses.length > 0 ? "+12.2% from last month" : "No expenses yet"}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Entries</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{expenses.length}</div>
                    <p className="text-xs text-muted-foreground">
                      {expenses.length > 0 ? "+7 since last login" : "No expenses yet"}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="col-span-4"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Expense Overview</CardTitle>
                    <CardDescription>Your expense trend for the last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <ExpenseChart />
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="col-span-3"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Expense by Category</CardTitle>
                    <CardDescription>Your spending distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ExpensePieChart />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Expenses</CardTitle>
                  <CardDescription>
                    {expenses.length > 0
                      ? `You've spent $${totalExpenses.toFixed(2)} this month`
                      : "Add your first expense to start tracking"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseList expenses={getRecentExpenses(expenses, 5)} />
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="gap-1">
                    <Link href="/dashboard/expenses">
                      <span>View All</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Monthly Trend</CardTitle>
                  <CardDescription>Your expense trend over the past 6 months</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ExpenseChart />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Category Distribution</CardTitle>
                  <CardDescription>Spending by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpensePieChart />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Expense Summary</CardTitle>
                  <CardDescription>Breakdown of your expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseSummary />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="expenses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Expenses</CardTitle>
                <CardDescription>Manage and view all your recorded expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseList expenses={expenses} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
