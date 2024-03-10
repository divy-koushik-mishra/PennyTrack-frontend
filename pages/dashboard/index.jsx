import Chart from "@/components/dashboard-page/Chart";
import IEBCards from "@/components/dashboard-page/IEBCards";
import { Sidebar } from "@/components/dashboard-page/Sidebar";
import Topbar from "@/components/dashboard-page/Topbar";
import React from "react";

export default function Dashboard() {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="">
					<Sidebar />
				</div>
				<div className="flex flex-col w-full space-x-6">
					<Topbar />
					<IEBCards />
					<div className="flex py-6">
						<Chart />
					</div>
				</div>
			</div>
		</div>
	);
}
