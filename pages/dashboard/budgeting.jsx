import BudgetTabs from "@/components/dashboard/Budgeting/BudgetTabs";
import BudgetTopbar from "@/components/dashboard/Budgeting/BudgetTopbar";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function expenses() {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="min-h-screen">
					<Sidebar />
				</div>
				<div className="flex flex-col w-full space-x-6">
					<BudgetTopbar />
					<BudgetTabs />
				</div>
			</div>
		</div>
	);
}
