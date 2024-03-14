import { Sidebar } from "@/components/dashboard/Sidebar";
import IncomeTabs from "@/components/dashboard/Income/IncomeTabs";
import IncomeTopbar from "@/components/dashboard/Income/IncomeTopbar";
import React from "react";

export default function income() {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="min-h-screen">
					<Sidebar />
				</div>
				<div className="flex flex-col w-full space-x-6">
					<IncomeTopbar />
					<IncomeTabs />
				</div>
			</div>
		</div>
	);
}
