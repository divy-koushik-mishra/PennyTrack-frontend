"use client";
import {
	Tab,
	TabPanel,
	Tabs,
	TabsBody,
	TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import Home from "./Home";
import Link from "next/link";

export default function TabBar() {
	const [activeTab, setActiveTab] = React.useState("home");
	const data = [
		{
			label: "Home",
			value: "home",
			desc: <Home />,
			link: "hero",
		},
		{
			label: "Features",
			value: "features",
			desc: "",
			link: "features",
		},
		{
			label: "About Us",
			value: "about-us",
			desc: "",
			link: "about",
		},
	];

	const renderContent = (desc, link) => {
		if (desc) {
			return desc;
		} else {
			return <Link href={`#${link}`}></Link>;
		}
	};

	return (
		<div className="">
			<Tabs value={activeTab}>
				<TabsHeader
					className="flex justify-center items-center bg-gray-800 p-4 w-1/4 mx-auto my-8"
					indicatorProps={{
						className: `absolute inset-0 z-10 h-full bg-light-green-500 rounded-md shadow px-8 align-middle`,
					}}
				>
					{data.map(({ label, value }) => (
						<Tab
							key={value}
							value={value}
							onClick={() => setActiveTab(value)}
							className={activeTab === value ? "text-black" : "text-white"}
						>
							{label}
						</Tab>
					))}
				</TabsHeader>
				<TabsBody>
					{data.map(({ value, desc, link }) => (
						<TabPanel key={value} value={value}>
							{renderContent(desc, link)}
						</TabPanel>
					))}
				</TabsBody>
			</Tabs>
		</div>
	);
}
