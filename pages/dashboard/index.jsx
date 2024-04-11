import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Budgeting from "@/components/dashboard/Homepage/Budgeting";
import PieChart from "@/components/dashboard/Homepage/Chart";
import IEBCards from "@/components/dashboard/Homepage/IEBCards";
import Topbar from "@/components/dashboard/Homepage/Topbar";
import { ViewReminders } from "@/components/dashboard/Reminders/ViewReminders";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TransactionsPageTable } from "@/components/dashboard/Transaction/TransactioPageTable";

export default function Dashboard() {
  const [chartData, setChartData] = useState({});
  const [spentCategories, setSpentCategories] = useState({});

  const data = {
    rent: 500,
    groceries: 300,
    food: 200,
    outings: 150,
    others: 100,
  };

  const router = useRouter();
  const [income, setIncome] = useState("0");
  const [expenses, setExpenses] = useState("0");

  useEffect(() => {
    const getIncomeExpenses = async () => {
      try {
        // Check if running in the browser before accessing localStorage
        if (typeof window !== "undefined") {
          const accessToken = localStorage.getItem("accessToken");
          if (!accessToken) {
            router.push("/login");
            return;
          }

          const incomeUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/income/totalIncome`;
          const expensesUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/expense/totalExpense`;

          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };

          const [incomeResponse, expensesResponse] = await Promise.all([
            axios.get(incomeUrl, config),
            axios.get(expensesUrl, config),
          ]);

          setIncome(incomeResponse.data.data.totalIncome);
          setExpenses(expensesResponse.data.data.totalExpense);
        }
      } catch (error) {
        console.error("Error fetching income and expenses:", error);
      }
    };

    getIncomeExpenses();

    const fetchSpentCaregory = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          router.push("/login");
          return;
        }

        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/expense/expenseByCategory`;

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const response = await axios.get(url, config);
        const data = response.data.data;
        // Check if response is an object and convert it into an array
        const dataArray = Array.isArray(data) ? data : Object.values(data);

        //  Convert the API response data into the format suitable for the pie chart
        const convertedData = data.reduce((acc, item) => {
          acc[item._id] = item.total;
          return acc;
        }, {});

        setSpentCategories(convertedData);
        console.log("Converted data:", convertedData);
      } catch (error) {
        console.error("Error fetching spent categories:", error);
      }
    };

    fetchSpentCaregory();
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="flex flex-col w-4/5">
      <div className="flex">
        <div className="sticky">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full space-x-6 pr-10">
          <Topbar />
          <IEBCards />
          <div className="flex flex-1 gap-x-4 pt-6 w-full">
            <PieChart data={spentCategories} />
            <Budgeting />
          </div>
          <div className="flex gap-x-4 pt-6 pr-7 mb-4 w-full">
            <TransactionsPageTable />
            <ViewReminders />
          </div>
        </div>
      </div>
    </div>
  );
}
