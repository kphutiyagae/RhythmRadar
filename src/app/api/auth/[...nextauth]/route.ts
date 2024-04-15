import NextAuth from "next-auth";
import Spotify from 'next-auth/providers/spotify';
import { JWT } from 'next-auth/jwt';

export async function refreshAccessToken(token: string) {
  const params = new URLSearchParams()
  params.append("grant_type", "refresh_token")
  params.append("refresh_token", token)

  const response = await fetch(process.env.AUTH_SPOTIFY_API_TOKEN_URL, {
    method: "POST",
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(process.env.AUTH_SPOTIFY_PUBLIC_API_KEY + ':' + process.env.AUTH_SPOTIFY_PRIVATE_API_KEY).toString('base64') )
    },
    body: params
  })

  const data = await response.json()
  return {
    token,
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? token,
    accessTokenExpires: Date.now() + data.expires_in * 1000
  }
}
export const authOptions = {
  providers: [
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_PUBLIC_API_KEY,
      clientSecret: process.env.AUTH_SPOTIFY_PRIVATE_API_KEY,
      authorization: `https://accounts.spotify.com/authorize?scope=${process.env.AUTH_SPOTIFY_API_SCOPES.toString().replaceAll(',','+')}`
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      // console.log(token)
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.accessTokenExpires = account.expires_at
        return token
      }
      // access token has not expired
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires * 1000) {
        return token
      }

      // access token has expired
      return await refreshAccessToken(token)
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
