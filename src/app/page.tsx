'use client'
// import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getRecentActivity, getTopTracks } from '@/app/services/spotify/spotify.service';

export default function Home() {

	// const session = await getServerSession(authOptions)
	const {data: session} = useSession();
	// const [x, setX] = useState('');
	const [topTracks, setTopTracks] = useState([]);

	useEffect(() => {
		// console.log(sessionStorage.getItem('accessToken'));
		// if(session && session.accessToken){
		// 	const activity = getRecentActivity(session.accessToken);
		// }
getTopTracks('BQCu2GFgV6khVfN856QYmmfGr6L3NJ7w9ZiEuC6C8c5YBDYi210Ds3pt1pQVXkbOZOc3DF9lBinvMb8R1QdGDOrAhVGezRl4yQsBYKWpJsypMhkC9me1DcZLZydFP1CTf_nzmEMgXnLt8b-Tg_dOwA7tcugHhotsm-xxuI6_rq_M72yf8OnHCEGCxWezOd7-tDfsaN44X0r0Ok8H8ZXxTvGU7xHPLH4tIHoa31ea8idwViBOPhEwYR53__3xI-OIQg24be8SWcWxeC6HUPoyLBHXx2ZC2qSgi5qSjh-yISy75t4Mfg')
	.then(tracks => setTopTracks(tracks))
	}, [])
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div>Landing Page</div>
			{/*<p>Status: {session?.token ?? 'Not logged in'}</p>*/}
			<p>Count: {topTracks?.length ?? 'No tracks'}</p>
		</main>
	);
}
