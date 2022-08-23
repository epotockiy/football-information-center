import { Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { Team } from '../../../core/models/team.old';

export type Props = {
  team: Team;
};

export function Details({ team }: Props): JSX.Element {
  return (
    <Card sx={{ minWidth: '100%', padding: 1, display: 'flex' }}>
      <CardContent>
        {team.crestUrl && (
          <CardMedia component='img' sx={{ width: 140 }} image={team.crestUrl} alt='club crest' />
        )}
        <h3>{team.name}</h3>
      </CardContent>
      <Box>
        <h5>Team squad</h5>
        {team.squad?.length > 0 && (
          <Grid container spacing={2}>
            {team.squad.map((player) => (
              <Grid item key={player.id}>
                <Paper elevation={1} sx={{ padding: 1 }}>
                  {player.name}
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Card>
  );
}
