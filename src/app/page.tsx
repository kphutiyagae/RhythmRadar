'use client'
// import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import {
	getCurrentUserProfile,
	getUserPlaylists,
	getUserTopArtists,
	getUserTopTracks,
} from '@/app/services/spotify/spotify.service';
import { getSession, useSession } from 'next-auth/react';
import SectionComponent from '@/app/components/section.component';
import { DM_Sans } from 'next/font/google';
const dmSans = DM_Sans({subsets: ['latin'], weight: ['500','900']})

// const session = await getSession();
export default function Home() {

	const {data: session} = useSession();

	// const session = await getServerSession(authOptions)
	// const [session, loading] = useSession();

	// const [x, setX] = useState('');
	const [playlists, setPlaylists] = useState([]);

	useEffect(() => {
		// console.log(sessionStorage.getItem('accessToken'));
		// if(session && session.accessToken){
		// 	const activity = getRecentActivity(session.accessToken);
		// }
		// getUserTopTracks()
		// 	.then(tracks => setTopTracks(tracks))
		// getUserTopArtists()
		// 	.then(console.log)
		getCurrentUserProfile().then( user => getUserPlaylists(user.id).then(playlists => setPlaylists(playlists)))
	}, [])
	return (
		<div className='flex min-h-screen flex-col'>
			<span className={dmSans.className + ' pl-12 mb-5'}>
				<h1 className='page-header'>Welcome Back!</h1>
				<h2 className='page-subheader ml-4 text-text-highlight'>Let's hop back into some music</h2>
			</span>
			<SectionComponent type='carousel' title='Trending' tracks={playlists}/>
		</div>
	);
}
