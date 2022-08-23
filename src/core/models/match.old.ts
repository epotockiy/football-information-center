export interface MatchesList {
  count: number;
  filters: unknown;
  matches: ShortMatch[];
}

export interface ShortMatch {
  id: number;
  competition: Competition;
  season: Season;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group?: any;
  lastUpdated: string;
  score: Score;
  homeTeam: HomeTeam;
  awayTeam: HomeTeam;
  referees: Referee[];
}

export interface Referee {
  id: number;
  name: string;
  role: string;
  nationality: string;
}

export interface HomeTeam {
  id: number;
  name: string;
}

export interface Score {
  winner?: string;
  duration: string;
  fullTime: FullTime;
  halfTime: FullTime;
  extraTime: ExtraTime;
  penalties: ExtraTime;
}

export interface ExtraTime {
  homeTeam?: any;
  awayTeam?: any;
}

export interface FullTime {
  homeTeam?: number;
  awayTeam?: number;
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: any;
}

export interface Competition {
  id: number;
  name: string;
  area: Area;
}

export interface Area {
  name: string;
  code: string;
  ensignUrl: string;
}

export interface MatchesFilters {
  teamId: number;
  limit: number;
}