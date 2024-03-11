import React from "react";
import { Avatar } from "@material-tailwind/react";

export default function TransactionTopbar() {
	return (
		<div className="flex justify-between items-center p-8 h-28 w-full text-light-green-500">
			<h1 className="text-3xl font-medium">Transaction</h1>
			<div className="w-[16rem] bg-[#1d1d1d] px-4 py-2.5 rounded-lg">
				<div className="flex gap-x-6 items-center">
					<Avatar
						src="https://docs.material-tailwind.com/img/face-2.jpg"
						alt="avatar"
						size="lg"
					/>
					Jatin Kumar H
				</div>
			</div>
		</div>
	);
}
