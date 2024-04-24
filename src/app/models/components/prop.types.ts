import React from 'react';
import { Track } from '@/app/models/music/openwhyd/types';
import { SpotifyArtist, SpotifyPlaylist, SpotifyTrack } from '@/app/models/music/spotify/types';
import { RadioStation } from '@/app/models/radio/types';
import { Station } from 'radio-browser-api';

export interface SectionComponentProps {
  type: 'track-list' | 'carousel' | 'hero' | 'radio';
  itemType: 'album-spotify' | 'artist-spotify' | 'track-spotify' | 'playlist-spotify' | 'radio';
  styles?: string;
  items?: Track[] | SpotifyTrack |SpotifyTrack[] | SpotifyArtist |SpotifyArtist [] | SpotifyPlaylist | SpotifyPlaylist [] | Station | Station[];
  title: string;
  subtitle ?: string;
  onItemClick?: (item: unknown) => void;
}
