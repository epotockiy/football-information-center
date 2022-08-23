import React from 'react';
import { Link } from 'react-router-dom';

import { ShortTeam } from '../../../../core/models/team.old';

import styles from './List.module.css'

export type Props = {
  teams?: ShortTeam[];
};

export function List({ teams = [] }: Props) {
  return (
    <div className={styles.list}>
      {teams.map((team) => (
        <Link key={team.id} to={team.id.toString()} className={styles.list__item}>
          {team.name}
        </Link>
      ))}
    </div>
  );
}
