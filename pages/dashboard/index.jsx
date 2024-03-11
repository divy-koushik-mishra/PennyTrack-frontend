import Budgeting from "@/components/dashboard-homepage/Budgeting";
import Chart from "@/components/dashboard-homepage/Chart";
import IEBCards from "@/components/dashboard-homepage/IEBCards";
import Reminders from "@/components/dashboard-homepage/Reminders";
import { Sidebar } from "@/components/dashboard-homepage/Sidebar";
import Topbar from "@/components/dashboard-homepage/Topbar";
import { TransactionsTable } from "@/components/dashboard-homepage/TransactionsTable";
import React from "react";

export default function Dashboard() {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="sticky">
					<Sidebar />
				</div>
				<div className="flex flex-col w-full space-x-6">
					<Topbar />
					<IEBCards />
					<div className="flex gap-x-4 pt-6">
						<Chart />
						<Budgeting />
					</div>
					<div className="flex gap-x-4 pt-6 mb-4">
						<TransactionsTable />
						<Reminders />
					</div>
				</div>
			</div>
		</div>
	);
}
