import ExpensesTabs from "@/components/dashboard/Expenses/ExpensesTabs";
import ExpensesTopbar from "@/components/dashboard/Expenses/ExpensesTopbar";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function expenses() {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="min-h-screen">
					<Sidebar />
				</div>
				<div className="flex flex-col w-full space-x-6">
					<ExpensesTopbar />
					<ExpensesTabs />
				</div>
			</div>
		</div>
	);
}
