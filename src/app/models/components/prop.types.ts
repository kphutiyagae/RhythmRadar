import React from 'react';
import { Track } from '@/app/models/music/openwhyd/types';

export interface SectionComponentProps {
  type: 'track-list' | 'carousel';
  styles?: string;
  tracks?: Track[];
  title: string;
  subtitle ?: string;
}
