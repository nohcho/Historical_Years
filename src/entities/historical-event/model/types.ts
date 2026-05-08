import type { Language } from '@/shared/config/i18n';

export type LocalizedString = Record<Language, string>;

export interface HistoricalEvent {
  year: number;
  text: string;
}

export interface HistoricalSegment {
  startYear: number;
  endYear: number;
  label: string;
  events: HistoricalEvent[];
}

export interface LocalizedHistoricalEvent {
  year: number;
  text: LocalizedString;
}

export interface LocalizedHistoricalSegment {
  startYear: number;
  endYear: number;
  label: LocalizedString;
  events: LocalizedHistoricalEvent[];
}
