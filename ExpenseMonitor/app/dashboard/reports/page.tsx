"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { DollarSign, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExpenseChart } from "@/components/expense-chart"
import { ExpensePieChart } from "@/components/expense-pie-chart"
import { ExpenseBarChart } from "@/components/expense-bar-chart"
import { ExpenseSummary } from "@/components/expense-summary"
import { useExpenses } from "@/hooks/use-expenses"

export default function ReportsPage() {
  const { expenses, totalExpenses } = useExpenses()
  const [period, setPeriod] = useState("month")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <DollarSign className="h-6 w-6 text-emerald-600" />
          <span>ExpenseTracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-muted-foreground" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium" href="/dashboard/reports">
            Reports
          </Link>
          <Link className="text-sm font-medium text-muted-foreground" href="/dashboard/settings">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Expense Reports</h1>
          <div className="flex items-center gap-2">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download report</span>
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Expense Trend</CardTitle>
                  <CardDescription>Your spending pattern over time</CardDescription>
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
                  <CardTitle>Monthly Comparison</CardTitle>
                  <CardDescription>Compare your spending month by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseBarChart />
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="categories" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Category Distribution</CardTitle>
                  <CardDescription>Spending by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpensePieChart />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                  <CardDescription>Detailed view of each category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseBarChart />
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Category Trends</CardTitle>
                  <CardDescription>How your spending in each category has changed over time</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ExpenseChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Spending Trends</CardTitle>
                <CardDescription>Analyze your spending patterns over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ExpenseChart />
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Trends</CardTitle>
                  <CardDescription>Your spending pattern by day of week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseBarChart />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Trends</CardTitle>
                  <CardDescription>Your spending pattern by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseBarChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="summary" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Expense Summary</CardTitle>
                <CardDescription>
                  A comprehensive summary of your expenses for{" "}
                  {period === "month"
                    ? "this month"
                    : period === "week"
                      ? "this week"
                      : period === "quarter"
                        ? "this quarter"
                        : period === "year"
                          ? "this year"
                          : "all time"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseSummary />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
