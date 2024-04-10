// import NextAuth from 'next-auth';
// import Spotify from 'next-auth/providers/spotify';
// import { environments } from '@/app/environments/dev.environment';
// import Google from 'next-auth/providers/google';
// export const authOptions = {
//   providers: [
//     // Spotify({
//     //   clientId: environments.SPOTIFY_PUBLIC_API_KEY,
//     //   clientSecret: environments.SPOTIFY_PRIVATE_API_KEY
//     // })
//     Google({
//       clientId: process.env.
//     })
//   ]
// }
//
// export default NextAuth(authOptions)
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Spotify from 'next-auth/providers/spotify';

export const authOptions = {
  providers: [
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_PUBLIC_API_KEY,
      clientSecret: process.env.AUTH_SPOTIFY_PRIVATE_API_KEY,

    })
  ]
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};

// export default NextAuth(authOptions)
