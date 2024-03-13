import { Sidebar } from "@/components/dashboard/Homepage/Sidebar";
import { TransactionsPageTable } from "@/components/dashboard/Transaction/TransactioPageTable";
import TransactionTopbar from "@/components/dashboard/Transaction/TransactionTopbar";

export default function transactions() {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="sticky">
					<Sidebar />
				</div>
				<div className="flex flex-col w-full space-x-6">
					<TransactionTopbar />
					<TransactionsPageTable />
					<div className="flex gap-x-4 pt-6"></div>
					<div className="flex gap-x-4 pt-6 mb-4"></div>
				</div>
			</div>
		</div>
	);
}
