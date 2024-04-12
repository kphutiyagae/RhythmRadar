import { getServerSession } from 'next-auth';

export default async function Home() {
	// const {data: session, status} = useSession();

	const session = await getServerSession()

	console.log({session: session});
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div>Landing Page</div>
			<p>Status: {session?.user?.name ?? 'Not logged in'}</p>
		</main>
	);
}
