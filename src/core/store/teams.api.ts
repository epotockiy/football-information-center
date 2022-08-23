import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_TOKEN } from '../constants';
import { Team, TeamsFilters, TeamsList } from '../models/team.old';

export const teamsApi = createApi({
  reducerPath: 'teams/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.football-data.org/v2/teams',
    // New API doesn't support cross domain requests ((
    // Therefore i rollback to old API, but I don't have documentation for it, so I can't fully use filters functionality
    // baseUrl: 'http://api.football-data.org/v4/teams',
    prepareHeaders: (headers) => {
      headers.set('X-Auth-Token', API_TOKEN);
      return headers;
    },
    mode: 'cors',
  }),
  endpoints: (builder) => ({
    teamsList: builder.query<TeamsList, TeamsFilters>({
      query: (filters) => ({
        url: '',
        params: filters,
      }),
    }),
    team: builder.query<Team, number>({
      query: (teamId) => ({
        url: `/${teamId}`,
      }),
    }),
    // getTeam
  }),
});

export const { useTeamsListQuery } = teamsApi;
