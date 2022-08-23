export interface TeamsList {
  count: number;
  filters: TeamsFilters;
  teams: ShortTeam[];
}

export interface TeamsFilters {
  limit: number;
  offset: number;
}

export interface ShortTeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors?: string;
  venue?: string;
  lastUpdated: string;
}

export interface Team {
  area: Area;
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  runningCompetitions: RunningCompetition[];
  coach: Coach;
  marketValue: number;
  squad: Squad[];
  staff: any[];
  lastUpdated: string;
}

export interface Squad {
  id: number;
  firstName: string;
  lastName?: string;
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
  shirtNumber?: number;
  marketValue: number;
  contract: Contract;
}

export interface Coach {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  contract: Contract;
}

export interface Contract {
  start: string;
  until: string;
}

export interface RunningCompetition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}
