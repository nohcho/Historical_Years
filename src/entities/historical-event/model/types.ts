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
