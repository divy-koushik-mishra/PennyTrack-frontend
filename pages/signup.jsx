import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Checkbox,
	Button,
} from "@material-tailwind/react";

export default function signup() {
	return (
		<div className="flex flex-col justify-center items-center h-screen gap-10 mx-auto">
			<h1 className="font-semibold text-4xl bg-gradient-to-r from-light-green-500 to-light-green-200 text-transparent bg-clip-text">
				Welcome to PennyTrack
			</h1>
			{/* Sign Up Card */}
			<Card className="w-96 bg-[#1c1c1c] text-white">
				<CardHeader
					variant="gradient"
					color="gray"
					className="mb-4 grid h-28 place-items-center"
				>
					<Typography variant="h3" color="light-green">
						Sign Up
					</Typography>
				</CardHeader>
				<CardBody className="flex flex-col gap-4">
					<Input label="Name" size="lg" color="white" />
					<Input label="Email" size="lg" color="white" />
					<Input label="Password" size="lg" color="white" type="password" />
					<Input
						label="Confirm Password"
						size="lg"
						color="white"
						type="password"
					/>
					<div className="-ml-2.5">
						<Checkbox
							label="Remember Me"
							color="light-green"
							className="text-white"
							labelProps={{ className: `text-light-green-500` }}
						/>
					</div>
				</CardBody>
				<CardFooter className="pt-0">
					<Button variant="gradient" className="text-light-green-500" fullWidth>
						Sign Up
					</Button>
					<Typography variant="small" className="mt-6 flex justify-center">
						Have an account?
						<Typography
							as="a"
							href="/login"
							variant="small"
							color="light-green"
							className="ml-1 font-bold"
						>
							Log In
						</Typography>
					</Typography>
				</CardFooter>
			</Card>
		</div>
	);
}
