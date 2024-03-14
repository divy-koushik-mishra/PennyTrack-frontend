import React from "react";

export default function AddExpenses() {
	return (
		<div className="text-white">
			<form className="lg:flex flex-col m-4 lg:mx-[20rem]">
				<div className="">
					{/* category */}
					<div className="mb-6">
						<p className="text-lg mb-6">Income Category</p>
						<select
							type="text"
							className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md p-4"
						>
							<option value="work">Work</option>
							<option value="main-hustle">Main Hustle</option>
							<option value="side-hustle">Side Hustle</option>
							<option value="trading">Trading</option>
							<option value="theft">Theft</option>
							<option value="others">Others</option>
						</select>
					</div>
					{/* Desc */}
					<div className="mb-6">
						<p className="text-lg mb-6">Income Description</p>
						<input
							type="text"
							className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md p-4"
						/>
					</div>
					{/* Amount */}
					<div className="mb-6">
						<p className="text-lg mb-6">Income Amount</p>
						<input
							type="number"
							className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md p-4"
						/>
					</div>
					{/* Date */}
					<div className="mb-6">
						<p className="text-lg mb-6">Income Date</p>
						<input
							type="date"
							className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md p-4"
						/>
					</div>
					<button className="w-full flex justify-center items-center bg-gradient-to-r from-light-green-800 via-light-green-500 to-light-green-300 text-black text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md">
						Add Income
					</button>
				</div>
			</form>
		</div>
	);
}
