import Budgeting from "@/components/dashboard/Homepage/Budgeting";
import Chart from "@/components/dashboard/Homepage/Chart";
import IEBCards from "@/components/dashboard/Homepage/IEBCards";
import Reminders from "@/components/dashboard/Homepage/Reminders";
import { Sidebar } from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Homepage/Topbar";
import { TransactionsTable } from "@/components/dashboard/Homepage/TransactionsTable";
import Link from "next/link";
import { useRouter } from "next/router";
import { TransactionsPageTable } from "@/components/dashboard/Transaction/TransactioPageTable";
import ReminderTabs from "@/components/dashboard/Reminders/ReminderTabs";
import { ViewReminders } from "@/components/dashboard/Reminders/ViewReminders";
export default function Dashboard() {
	const router = useRouter();
	if (typeof window !== "undefined") {
		const accessToken = localStorage.getItem("accessToken");
		if (!accessToken) {
			router.push("/login");
		}
	}
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
						<TransactionsPageTable />
						<ViewReminders />
					</div>
				</div>
			</div>
		</div>
	);
}
