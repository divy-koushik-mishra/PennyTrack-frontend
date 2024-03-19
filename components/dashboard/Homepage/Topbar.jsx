"use client";
import React from "react";
import { Avatar } from "@material-tailwind/react";
import axios from "axios";

export default function Topbar() {
  //   // get refreshtoken
  //   if (typeof window !== "undefined") {
  //     const refreshToken = localStorage.getItem("refreshToken");

  //     //  get username using refreshtoken
  //     const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/current-user`;
  //     axios
  //       .post(
  //         url,
  //         {},
  //         {
  //           headers: { Authorization: `Bearer ${refreshToken}` },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res);
  //         localStorage.setItem("fullName", res.data.data.fullName);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  const fullName = localStorage.getItem("fullName");
  return (
    <div className="flex justify-between items-center p-8 h-28 w-full text-light-green-500">
      <h1 className="text-3xl font-medium">Welcome to PennyTrack Dashboard</h1>
      <div className="w-[16rem] bg-[#1d1d1d] px-4 py-2.5 rounded-lg">
        <div className="flex gap-x-6 items-center">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="lg"
          />
          {fullName}
        </div>
      </div>
    </div>
  );
}
