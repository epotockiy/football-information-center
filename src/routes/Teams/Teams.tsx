import { Alert, CircularProgress, Container } from '@mui/material';
import React, { useState } from 'react';

import { useTeamsListQuery } from '../../core/store/teams.api';
import { Filter } from './components/Filter/Filter';
import { List } from './components/List/List';

export function Teams(): JSX.Element {
  const [limit, setLimit] = useState(20);
  const [offsetMultiplier, setOffsetMultiplier] = useState(0);
  const { isLoading, isError, data } = useTeamsListQuery(
    // {
    //   limit,
    //   offset: offsetMultiplier * limit,
    // }
    {
      areas: [],
    },
  );

  return (
    <Container className='teams' maxWidth={false}>
      <Alert severity='warning'>Pagination filters not applicable for old API, left it only as example</Alert>
      <Filter
        limit={limit}
        offsetMultiplier={offsetMultiplier}
        onLimitChange={setLimit}
        onOffsetMultiplierChange={setOffsetMultiplier}
        prevDisabled={offsetMultiplier === 0}
        nextDisabled={data?.count !== limit}
      ></Filter>

      {!isLoading && <List teams={data?.teams} />}

      {isLoading && <CircularProgress />}

      {isError && <Alert severity='error'>Something get wrong</Alert>}
    </Container>
  );
}
