'use client'
// import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import { getUserTopArtists, getUserTopTracks } from '@/app/services/spotify/spotify.service';
import { getSession, useSession } from 'next-auth/react';


// const session = await getSession();
export default function Home() {

	const {data: session} = useSession();

	// const session = await getServerSession(authOptions)
	// const [session, loading] = useSession();

	// const [x, setX] = useState('');
	const [topTracks, setTopTracks] = useState([]);

	useEffect(() => {
		// console.log(sessionStorage.getItem('accessToken'));
		// if(session && session.accessToken){
		// 	const activity = getRecentActivity(session.accessToken);
		// }
		getUserTopTracks()
			.then(tracks => setTopTracks(tracks))
		getUserTopArtists()
			.then(console.log)
	}, [])
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div>Landing Page</div>
			<p>Status: {session?.accessToken ?? 'Not logged in'}</p>
			<p>User: {session?.user?.name ?? 'Not logged in'}</p>

		</main>
	);
}
