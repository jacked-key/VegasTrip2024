import { Divider, Grid, Stack } from '@mui/material';
import React from 'react';
import BioCard, { BioCardProps } from './bioCard';
import InformationCard, { InformationCardProps } from './informationCard';

export interface TeamMember extends BioCardProps, InformationCardProps {
  name: string;
  who_are_you: string;
  fun_fact: string;
  most_excited: string;
  throw_up: string;
}
export interface MeetTheTeamProps {
  teamMembers: TeamMember[];
}

export default function MeetTheTeam(props: MeetTheTeamProps) {
  return (
    <Grid
      container
      className="bg-transparent"
      spacing={0}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Grid container item xs={8} className="bg-white">
        <Grid item xs={12}>
          <Stack
            direction="column"
            spacing={2}
            alignItems={'center'}
            justifyContent={'center'}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            {props.teamMembers.map((teamMember, idx) =>
              render_individual(teamMember, idx),
            )}
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}

function render_individual(teamMember: TeamMember, idx: number) {
  return (
    <Grid container spacing={2} key={idx}>
      <Grid container item xs={6} direction="column" alignItems={'center'}>
        <BioCard name={teamMember.name} who_are_you={teamMember.who_are_you} />
      </Grid>
      <Grid container item xs={6} direction="column" alignItems={'center'}>
        <InformationCard
          fun_fact={teamMember.fun_fact}
          most_excited={teamMember.most_excited}
          throw_up={teamMember.throw_up}
        />
      </Grid>
    </Grid>
  );
}
