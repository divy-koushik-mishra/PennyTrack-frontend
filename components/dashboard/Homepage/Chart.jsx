import React, { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const Chart = () => {
	const [activeBar, setActiveBar] = useState(null);

	return (
		<ResponsiveContainer width="50%" height={350}>
			<BarChart data={data}>
				<XAxis
					dataKey="name"
					stroke="#eee"
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis stroke="#eee" fontSize={12} tickLine={false} axisLine={false} />

				<Bar
					dataKey="uv"
					fill="#8bc34a"
					radius={[4, 4, 0, 0]}
					className="fill-primary"
				/>

				<Bar
					dataKey="pv"
					fill="#eee"
					radius={[4, 4, 0, 0]}
					className="fill-primary"
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default Chart;
