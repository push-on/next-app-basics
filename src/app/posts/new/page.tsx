import Link from "next/link"

export default function page() {
	return (
		<div className="flex min-h-screen justify-center items-center text-white bg-black">
			<h1 className="text-6xl font-bold underline underline-offset-8 decoration-sky-500 ">
				Page
			</h1>
			<Link className="text-3xl duration-150 transition-all hover:text-orange-400 hover:underline decoration-yellow-400 underline-offset-8" href={'/'}>Route: / Home</Link>
		</div>
	)
}
