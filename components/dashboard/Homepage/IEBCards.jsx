import React, { useEffect, useState } from "react";
import { InboxArrowDownIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function IEBCards() {
  const [income, setIncome] = useState("0");
  const [expenses, setExpenses] = useState("0");
  const [balance, setBalance] = useState("0");

  const incomeUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/income/totalIncome`;
  const expensesUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/expense/totalExpense`;
  const accessToken = localStorage.getItem("accessToken");

  const getIncomeExpenses = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const incomeResponse = await axios.get(incomeUrl, config);
      const expensesResponse = await axios.get(expensesUrl, config);

      console.log("Income Response:", incomeResponse.data.data);
      console.log("Expenses Response:", expensesResponse.data.data);
      setIncome(incomeResponse.data.data.totalIncome);
      setExpenses(expensesResponse.data.data.totalExpense);
      setBalance(income - expenses);
    } catch (error) {
      console.error("Error fetching income and expenses:", error);
    }
  };

  useEffect(() => {
    getIncomeExpenses();
  }, [income, expenses, balance]);
  return (
    <div className="grid grid-cols-3 justify-around items-center gap-6 w-[83%]">
      <div className="grid place-items-center w-[26rem] bg-[#1d1d1d] p-8 rounded-lg text-light-green-500">
        <div className="flex justify-center items-center w-10 h-10 bg-gray-800 rounded-lg mb-4">
          <InboxArrowDownIcon className="w-5 h-5" />
        </div>
        <p className="text-xl">Income</p>
        <p className="text-3xl">₹{income}</p>
      </div>
      <div className="grid place-items-center w-[26rem] bg-[#1d1d1d] p-8 rounded-lg text-light-green-500">
        <div className="flex justify-center items-center w-10 h-10 bg-gray-800 rounded-lg mb-4">
          <InboxArrowDownIcon className="w-5 h-5" />
        </div>
        <p className="text-xl">Expenses</p>
        <p className="text-3xl">₹{expenses}</p>
      </div>
      <div className="grid place-items-center w-[26rem] bg-[#1d1d1d] p-8 rounded-lg text-light-green-500">
        <div className="flex justify-center items-center w-10 h-10 bg-gray-800 rounded-lg mb-4">
          <InboxArrowDownIcon className="w-5 h-5" />
        </div>
        <p className="text-xl">Balance</p>
        <p className="text-3xl">₹{balance}</p>
      </div>
    </div>
  );
}
