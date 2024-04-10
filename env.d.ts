declare namespace NodeJS {
    interface ProcessEnv {
        AUTH_GOOGLE_CLIENT_ID: string;
        AUTH_GOOGLE_CLIENT_SECRET:string;
        AUTH_SECRET: string;
        AUTH_OPENWHYD_API_BASE_URL:string;
        AUTH_OPENWHYD_API_KEY: string;
        AUTH_MUSICBRAINZ_API_BASE_URL: string;
        AUTH_MUSICBRAINZ_API_KEY: string;
        AUTH_GENIUS_API_BASE_URL: string;
        AUTH_GENIUS_API_KEY: string;
        AUTH_RADIO_API_BASE_URL: string;
        AUTH_RADIO_API_KEY: string;
        AUTH_GENERATE_API_BASE_URL: string;
        AUTH_GENERATE_API_KEY: string;
        AUTH_SPOTIFY_API_BASE_URL: string;
        AUTH_SPOTIFY_API_TOKEN_URL: string;
        AUTH_SPOTIFY_AUTH_TOKEN_URL: string;
        AUTH_SPOTIFY_PUBLIC_API_KEY: string;
        AUTH_SPOTIFY_PRIVATE_API_KEY: string;
        AUTH_SPOTIFY_REFRESH_TOKEN: string;
        AUTH_SPOTIFY_API_SCOPES: string[];
        SPOTIFY_API_REDIRECT_URI: string;
    }
}
