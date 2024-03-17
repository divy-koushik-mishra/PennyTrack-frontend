import React, { useState } from "react";
import axios from "axios";

export default function AddReminder() {
	const [formData, setFormData] = useState({
		title: "",
		amount: "",
	});
	const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/reminder/addReminder`;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const accessToken = localStorage.getItem("accessToken");
			if (!accessToken) {
				return;
			}

			const config = {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			};

			const response = await axios.post(url, formData, config);

			console.log("Reminder added successfully:", response.data);

			setFormData({
				title: "",
				amount: "",
			});
		} catch (error) {
			console.error("Error adding reminder:", error);
		}
	};

	return (
		<div className="text-white">
			<form
				className="lg:flex flex-col m-4 lg:mx-[20rem]"
				onSubmit={handleSubmit}
			>
				<div className="">
					{/* Desc */}
					<div className="mb-6">
						<p className="text-lg mb-6">Reminder Description</p>
						<input
							type="text"
							name="title"
							value={formData.title}
							onChange={handleChange}
							className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md p-4"
						/>
					</div>
					{/* Amount */}
					<div className="mb-6">
						<p className="text-lg mb-6">Reminder Amount</p>
						<input
							type="number"
							name="amount"
							value={formData.amount}
							onChange={handleChange}
							className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md p-4"
						/>
					</div>
					{/* Date */}
					<div className="mb-6">
						<p className="text-lg mb-6">Reminder Date</p>
						<input
							type="date"
							className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md p-4"
						/>
					</div>
					<button
						type="submit"
						className="w-full flex justify-center items-center bg-gradient-to-r from-light-green-800 via-light-green-500 to-light-green-300 text-black text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md"
					>
						Add Reminder
					</button>
				</div>
			</form>
		</div>
	);
}
