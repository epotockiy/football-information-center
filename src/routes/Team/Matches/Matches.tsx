import {
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { isBefore, parseISO } from 'date-fns';
import React, { useMemo } from 'react';

import { Progress } from '../../../components/Progress/Progress';
import { useTeamMatchesQuery } from '../../../core/store/teams.api';

export type Props = {
  teamId: number;
};

export function Matches({ teamId }: Props): JSX.Element {
  const {
    isLoading,
    isError,
    data: matches,
  } = useTeamMatchesQuery({
    limit: 100, // Load such big number of matches because for low limit API returns only far away matches
    teamId,
  });

  // Filter matches from current month which already happens and get only first 10
  const onlyUpcomingMatches = useMemo(() => {
    const currentDate = new Date();

    return (matches || [])
      .filter((match) => isBefore(currentDate, parseISO(match.utcDate)))
      .slice(0, 10);
  }, [matches]);

  return (
    <>
      <h4>Upcoming matches</h4>
      <TableContainer component={Paper}>
        {!isLoading && matches != null && (
          <Table sx={{ minWidth: '100%' }} aria-label='matches table'>
            <TableHead>
              <TableRow>
                <TableCell>Rival Team</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Competition Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {onlyUpcomingMatches.map((match) => (
                <TableRow key={match.id}>
                  <TableCell>
                    {match.homeTeam.id === teamId ? match.awayTeam.name : match.homeTeam.name}
                  </TableCell>
                  <TableCell>{match.utcDate}</TableCell>
                  <TableCell>{match.competition?.name || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {isLoading && <Progress />}

        {isError && <Alert severity='error'>Matches can&apos;t be loaded</Alert>}
      </TableContainer>
    </>
  );
}
