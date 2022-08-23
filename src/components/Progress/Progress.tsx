import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export function Progress(): JSX.Element {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
