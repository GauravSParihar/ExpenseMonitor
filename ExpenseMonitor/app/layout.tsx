import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ExpenseProvider } from "@/hooks/use-expenses"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Expense Tracker",
  description: "Track and visualize your expenses with beautiful charts and analytics",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ExpenseProvider>
            {children}
            <Toaster />
          </ExpenseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
