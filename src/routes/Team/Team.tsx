import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { Progress } from '../../components/Progress/Progress';
import { useTeamQuery } from '../../core/store/teams.api';
import { Details } from './Details/Details';
import { Matches } from './Matches/Matches';

export function Team(): JSX.Element {
  const params = useParams();
  const memoizedTeamId = useMemo(() => Number(params.teamId), [params]);
  const { isLoading, isError, data: team } = useTeamQuery(memoizedTeamId);

  return (
    <>
      {!isLoading && team != null && (
        <>
          <Details team={team} />
          <Matches teamId={memoizedTeamId}></Matches>
        </>
      )}

      {isLoading && <Progress />}

      {isError && <Navigate to='/teams' />}
    </>
  );
}
