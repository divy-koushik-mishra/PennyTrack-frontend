import React from "react";
import { InboxArrowDownIcon } from "@heroicons/react/24/solid";

export default function IEBCards() {
  return (
    <div className="grid grid-cols-3 justify-around items-center gap-6 w-[83%]">
      <div className="grid place-items-center w-[26rem] bg-[#1d1d1d] p-8 rounded-lg text-light-green-500">
        <div className="flex justify-center items-center w-10 h-10 bg-gray-800 rounded-lg mb-4">
          <InboxArrowDownIcon className="w-5 h-5" />
        </div>
        <p className="text-xl">Income</p>
        <p className="text-3xl">₹40,000</p>
      </div>
      <div className="grid place-items-center w-[26rem] bg-[#1d1d1d] p-8 rounded-lg text-light-green-500">
        <div className="flex justify-center items-center w-10 h-10 bg-gray-800 rounded-lg mb-4">
          <InboxArrowDownIcon className="w-5 h-5" />
        </div>
        <p className="text-xl">Expenses</p>
        <p className="text-3xl">₹10,000</p>
      </div>
      <div className="grid place-items-center w-[26rem] bg-[#1d1d1d] p-8 rounded-lg text-light-green-500">
        <div className="flex justify-center items-center w-10 h-10 bg-gray-800 rounded-lg mb-4">
          <InboxArrowDownIcon className="w-5 h-5" />
        </div>
        <p className="text-xl">Balance</p>
        <p className="text-3xl">₹30,000</p>
      </div>
    </div>
  );
}
