import { Sidebar } from "@/components/dashboard-page/Sidebar";
import Topbar from "@/components/dashboard-page/Topbar";
import React from "react";

export default function Dashboard() {
	return (
		<div className="flex gap-x-4">
			<div className="">
				<Sidebar />
			</div>
			<Topbar />
		</div>
	);
}
