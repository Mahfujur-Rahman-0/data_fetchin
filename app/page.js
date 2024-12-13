import FatchingData from "@/app/FatchingData";
// import { cookies } from "next/headers";

export default async function Home() {
	// const store = cookies().get("theme");
	const postss = await FatchingData();
	return (
		<>
			<h1 className="text-center text-4xl">Test of data fatching</h1>
			<br />
			<p className="bg-slate-400 w-full">
				{postss ? (postss.setup ? postss.setup : postss.joke) : "Loading..."}
			</p>
		</>
	);
}
