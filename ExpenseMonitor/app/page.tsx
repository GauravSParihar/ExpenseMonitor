import Link from "next/link"
import { ArrowRight, BarChart3, DollarSign, PieChart, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <DollarSign className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-xl font-bold">ExpenseTracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Track Your Expenses with Ease
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Visualize your spending habits, set budgets, and take control of your finances with our intuitive
                    expense tracker.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900 p-4 shadow-xl">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg">Monthly Overview</h3>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></div>
                        <span className="text-emerald-600 font-bold">Live Dashboard</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full h-[150px] relative">
                        {/* Animated chart bars */}
                        <div className="absolute bottom-0 left-[10%] w-[5%] h-[30%] bg-emerald-500 rounded-t-md animate-[pulse_2s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-0 left-[20%] w-[5%] h-[60%] bg-emerald-500 rounded-t-md animate-[pulse_2.2s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-0 left-[30%] w-[5%] h-[40%] bg-emerald-500 rounded-t-md animate-[pulse_1.8s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-0 left-[40%] w-[5%] h-[70%] bg-emerald-500 rounded-t-md animate-[pulse_2.5s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-0 left-[50%] w-[5%] h-[50%] bg-emerald-500 rounded-t-md animate-[pulse_2s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-0 left-[60%] w-[5%] h-[80%] bg-emerald-500 rounded-t-md animate-[pulse_1.7s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-0 left-[70%] w-[5%] h-[45%] bg-emerald-500 rounded-t-md animate-[pulse_2.3s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-0 left-[80%] w-[5%] h-[65%] bg-emerald-500 rounded-t-md animate-[pulse_2.1s_ease-in-out_infinite]"></div>

                        {/* Line overlay */}
                        <div className="absolute top-[20%] left-0 w-full h-[2px] bg-emerald-300 opacity-30"></div>
                        <div className="absolute top-[40%] left-0 w-full h-[2px] bg-emerald-300 opacity-30"></div>
                        <div className="absolute top-[60%] left-0 w-full h-[2px] bg-emerald-300 opacity-30"></div>
                        <div className="absolute top-[80%] left-0 w-full h-[2px] bg-emerald-300 opacity-30"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded relative overflow-hidden">
                        <div className="text-xs text-gray-500">Food</div>
                        <div className="font-bold">
                          <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 w-[70%]"></div>
                          <span className="relative z-10">$0</span>
                        </div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded relative overflow-hidden">
                        <div className="text-xs text-gray-500">Transport</div>
                        <div className="font-bold">
                          <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-[40%]"></div>
                          <span className="relative z-10">$0</span>
                        </div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded relative overflow-hidden">
                        <div className="text-xs text-gray-500">Shopping</div>
                        <div className="font-bold">
                          <div className="absolute bottom-0 left-0 h-1 bg-purple-500 w-[85%]"></div>
                          <span className="relative z-10">$0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-800/30 dark:text-emerald-400">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to manage your finances
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our expense tracker provides powerful tools to help you understand your spending habits and take
                  control of your finances.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                  <BarChart3 className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Detailed Analytics</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Visualize your spending with beautiful charts and graphs that make it easy to understand where your
                    money goes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                  <PieChart className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Category Tracking</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Organize expenses by categories to identify spending patterns and find opportunities to save.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                  <TrendingDown className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Trend Analysis</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Track your spending over time to identify trends and make informed decisions about your finances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-800/30 dark:text-emerald-400">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What our users say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Don&apos;t just take our word for it. Here&apos;s what people are saying about our expense tracker.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    "This expense tracker has completely changed how I manage my finances. The visualizations make it so
                    easy to understand where my money is going."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Financial Analyst</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    "I've tried many expense trackers, but this one stands out with its beautiful interface and powerful
                    analytics. It's helped me save over $200 a month!"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-800/30 dark:text-emerald-400">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Got questions? We&apos;ve got answers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is my data secure?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, all your financial data is stored locally on your device. We don&apos;t store any of your
                  financial information on our servers.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I export my data?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, you can export your expense data in CSV format for use in other applications or for backup
                  purposes.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is there a mobile app?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our expense tracker is a web application that works on all devices, including mobile phones and
                  tablets.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to take control of your finances?
                </h2>
                <p className="max-w-[900px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start tracking your expenses today and gain insights into your spending habits.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} ExpenseTracker. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
