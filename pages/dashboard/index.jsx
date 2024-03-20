"use client";
import Budgeting from "@/components/dashboard/Homepage/Budgeting";
import PieChart from "@/components/dashboard/Homepage/Chart";
import IEBCards from "@/components/dashboard/Homepage/IEBCards";
import Topbar from "@/components/dashboard/Homepage/Topbar";
import { ViewReminders } from "@/components/dashboard/Reminders/ViewReminders";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TransactionsPageTable } from "@/components/dashboard/Transaction/TransactioPageTable";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Dashboard() {
  const router = useRouter();
  const [income, setIncome] = useState("0");
  const [expenses, setExpenses] = useState("0");

  const incomeUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/income/totalIncome`;
  const expensesUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/expense/totalExpense`;
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const getIncomeExpenses = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const incomeResponse = await axios.get(incomeUrl, config);
        const expensesResponse = await axios.get(expensesUrl, config);

        setIncome(incomeResponse.data.data.totalIncome);
        setExpenses(expensesResponse.data.data.totalExpense);
        console.log("Income:", income);
        console.log("Expenses:", expenses);
      } catch (error) {
        console.error("Error fetching income and expenses:", error);
      }
    };

    getIncomeExpenses();
  }, [income, expenses]);
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <div className="sticky">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full space-x-6">
          <Topbar />
          <IEBCards />
          <div className="flex gap-x-4 pt-6">
            <PieChart income={income} expense={expenses} />
            <Budgeting />
          </div>
          <div className="flex gap-x-4 pt-6 mb-4">
            <TransactionsPageTable />
            <ViewReminders />
          </div>
        </div>
      </div>
    </div>
  );
}
