import {
	ArrowTrendingUpIcon,
	BarsArrowDownIcon,
	BellAlertIcon,
	BuildingStorefrontIcon,
	ClipboardDocumentListIcon,
	PowerIcon,
	PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import {
	Card,
	List,
	ListItem,
	ListItemPrefix,
	Typography,
} from "@material-tailwind/react";
import Link from "next/link";

export function Sidebar() {
	const menuItems = [
		{
			icon: <PresentationChartBarIcon className="h-5 w-5" />,
			label: "Dashboard",
			href: "/dashboard/",
		},
		{
			icon: <BarsArrowDownIcon className="h-5 w-5" />,
			label: "Transactions",
			href: "/dashboard/transactions",
		},
		{
			icon: <ArrowTrendingUpIcon className="h-5 w-5" />,
			label: "Income",
			href: "/dashboard/income",
		},
		{
			icon: <ClipboardDocumentListIcon className="h-5 w-5" />,
			label: "Expenses",
			href: "/dashboard/expenses",
		},
		{
			icon: <BuildingStorefrontIcon className="h-5 w-5" />,
			label: "Budgeting",
			href: "/dashboard/budgeting",
		},
		{
			icon: <BellAlertIcon className="h-5 w-5" />,
			label: "Reminders",
			href: "/dashboard/reminders",
		},
		{
			icon: <PowerIcon className="h-5 w-5" />,
			label: "Log Out",
			href: "/",
		},
	];

	return (
		<Card className="h-full w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#1d1d1d]">
			<div className="mb-2 p-4">
				<Typography variant="h3" color="light-green">
					PennyTrack
				</Typography>
			</div>
			<List className="text-light-green-500">
				{menuItems.map(({ icon, label, href }, index) => (
					<Link key={index} href={href}>
						<ListItem>
							<ListItemPrefix>{icon}</ListItemPrefix>
							{label}
						</ListItem>
					</Link>
				))}
			</List>
		</Card>
	);
}
