import React from 'react';
import { Track } from '@/app/models/music/openwhyd/types';
import { SpotifyArtist, SpotifyPlaylist, SpotifyTrack } from '@/app/models/music/spotify/types';

export interface SectionComponentProps {
  type: 'track-list' | 'carousel' | 'hero';
  itemType: 'album-spotify' | 'artist-spotify' | 'track-spotify' | 'playlist-spotify';
  styles?: string;
  items?: Track[] | SpotifyTrack |SpotifyTrack[] | SpotifyArtist |SpotifyArtist [] | SpotifyPlaylist | SpotifyPlaylist [];
  title: string;
  subtitle ?: string;
}
