'use client'

interface errorProps {
	error: Error,
	reset: () => void
}

export default function Error({ error, reset }: errorProps) {
	return (
		<div className="flex flex-col min-h-screen justify-center items-center text-white bg-black space-y-10">
			<h1 className="text-6xl font-bold underline underline-offset-8 decoration-red-500 ">
				{error.message || 'Something went wrong'}
			</h1>
			<button onClick={reset} className="text-3xl px-5 py-2 rounded-xl border-2 border-emerald-500 bg-emerald-500/30 text-emerald-500 hover:bg-emerald-500/50 active:bg-emerald-500 active:text-emerald-950 duration-150">Try Again</button>
		</div>
	)
}



