import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useCallback, useId } from 'react';

import styles from './Filter.module.css';

export type Props = {
  limit: number;
  offsetMultiplier: number;
  prevDisabled: boolean;
  nextDisabled: boolean;
  onLimitChange: (a: number) => void;
  onOffsetMultiplierChange: (a: number) => void;
};

export function Filter({
  limit = 20,
  offsetMultiplier = 0,
  prevDisabled = false,
  nextDisabled = false,
  onLimitChange,
  onOffsetMultiplierChange,
}: Props): JSX.Element {
  const id = useId();
  const memoizedLimitChange = useCallback(
    (e: SelectChangeEvent<number>) => {
      onLimitChange(Number(e.target.value)), onOffsetMultiplierChange(0);
    },
    [onLimitChange, onOffsetMultiplierChange],
  );

  return (
    <div className={styles.filters}>
      <Button
        variant='contained'
        disabled={prevDisabled}
        onClick={() => onOffsetMultiplierChange(offsetMultiplier - 1)}
      >
        Prev
      </Button>
      <div className={styles.filters__text}>
        Showed
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id={id}>Limit</InputLabel>
          <Select labelId={id} value={limit} label='Limit' onChange={memoizedLimitChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        per page
      </div>
      <Button
        variant='contained'
        disabled={nextDisabled}
        onClick={() => onOffsetMultiplierChange(offsetMultiplier + 1)}
      >
        Next
      </Button>
    </div>
  );
}
