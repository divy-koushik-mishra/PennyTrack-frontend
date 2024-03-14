import ReminderTabs from "@/components/dashboard/Reminders/ReminderTabs";
import ReminderTopbar from "@/components/dashboard/Reminders/ReminderTopbar";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function reminders() {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="min-h-screen">
					<Sidebar />
				</div>
				<div className="flex flex-col w-full space-x-6">
					<ReminderTopbar />
					<ReminderTabs />
				</div>
			</div>
		</div>
	);
}
