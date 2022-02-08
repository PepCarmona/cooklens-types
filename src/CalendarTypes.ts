export interface CalendarBoundaries {
  startDate?: Date;
  endDate?: Date;
  duration?: number;
}
export type Calendar = CalendarMonth[];

interface CalendarMonth {
  monthNumber: number;
  monthName: string;
  year: number;
  weeks: Week[];
  isInView: boolean;
}

export type Week = [
  Day | null,
  Day | null,
  Day | null,
  Day | null,
  Day | null,
  Day | null,
  Day | null
];

export interface Day {
  month: string;
  dayNumber: string;
  dayNameShort: string;
  dayNameLong: string;
  weekday: number;
  date: string;
  isBeforeToday: boolean;
}
