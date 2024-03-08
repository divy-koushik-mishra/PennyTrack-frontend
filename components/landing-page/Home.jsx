import React from "react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import phone from "@/public/phone.png";
import chart from "@/public/chart.png";

export default function Home() {
	return (
		<div className="">
			{/* Hero Section */}
			<div className="grid place-items-center gap-6 mb-8" id="hero">
				<div className="text-[#b8b8b8] w-fit rounded-lg bg-[#1c1c1c] p-4 hover:scale-110 transition ease-in-out duration-200 cursor-pointer">
					Next generation of
				</div>
				<h1 className="text-8xl text-transparent font-medium bg-gradient-to-b from-[#f0f0f0] to-[#fff] bg-clip-text">
					expense tracking.
				</h1>
				<div className="">
					<Image src={phone} alt="phone-image" />
				</div>
				<p className="text-xl text-center max-w-[43rem] text-[#eee]">
					PennyTrack is the ultimate tool for managing your money and staying on
					top of your expenses. With our easy-to-use app, you can quickly input
					and categorize your expenses, set and track a budget.
				</p>
				<div className="grid grid-cols-2 items-center gap-4">
					<Link href="#buttons-with-link">
						<Button size="lg">Log In</Button>
					</Link>
					<Link href="#buttons-with-link">
						<Button
							variant="outlined"
							size="lg"
							className="text-black hover:ring ring-gray-500 bg-light-green-500"
						>
							Sign Up
						</Button>
					</Link>
				</div>
			</div>
			{/* Features Section*/}
			<div className="grid place-items-center gap-6" id="features">
				<h1 className="text-8xl text-transparent font-medium bg-gradient-to-b from-[#f0f0f0] to-[#fff] bg-clip-text">
					Features.
				</h1>
				<div className="grid grid-cols-2 justify-center items-center">
					<div className="">
						<Image src={chart} alt="chart" className="" />
					</div>
					<p className="text-xl text-center text-[#eee] max-w-[50rem]">
						Welcome to our PennyTrack, where managing your finances has never
						been easier. With our platform, you can effortlessly track your
						expenses, ensuring that every dollar is accounted for. Whether
						it&apos;s groceries, bills, or leisure activities, our intuitive
						interface allows you to input and monitor your spending with ease.
						Take control of your financial future by setting savings goals
						tailored to your needs. Our system ensures you never miss a payment
						deadline again, sending timely reminders to keep you on track and
						avoid unnecessary fees. Visualize your financial progress with
						dynamic charts that provide insights into your spending habits and
						savings trends. And to keep you informed every step of the way,
						receive convenient email notifications for important updates and
						reminders. Start your journey towards financial freedom today with
						our comprehensive PennyTrack, an expense tracker website.
					</p>
				</div>
			</div>
			{/* About Section */}
			<div className="grid place-items-center gap-6 pb-[5rem] " id="about">
				<h1 className="text-8xl text-transparent font-medium bg-gradient-to-b from-[#f0f0f0] to-[#fff] bg-clip-text">
					About.
				</h1>
				<p className="text-xl text-center text-[#eee] max-w-lg">
					PennyTrack is an expense tracker website built by final year college
					students. What once was a pet project turned into a real world
					application
				</p>
			</div>
		</div>
	);
}
