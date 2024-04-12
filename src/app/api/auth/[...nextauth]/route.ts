import NextAuth from "next-auth";
import Spotify from 'next-auth/providers/spotify';

console.log({
  scopes: process.env.AUTH_SPOTIFY_API_SCOPES,
  scopesReplaced: process.env.AUTH_SPOTIFY_API_SCOPES.toString().replaceAll(',','+')
})
export const authOptions = {
  providers: [
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_PUBLIC_API_KEY,
      clientSecret: process.env.AUTH_SPOTIFY_PRIVATE_API_KEY,
      authorization: `https://accounts.spotify.com/authorize?scope=${process.env.AUTH_SPOTIFY_API_SCOPES.toString().replaceAll(',','+')}`
    })
  ]
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
