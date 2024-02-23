'use client';
import React from "react";
import Welcome from "./_components/welcome";
import MeetTheTeam from "./_components/meetTheTeam/meetTheTeam";
import { teamMembers } from "./_team/team_member";

export default function Home() {
  const [meetTheTeam, setMeetTheTeam] = React.useState(false);

  return (
    <main>
      <Welcome setLoaded={setMeetTheTeam}/>
      {
        meetTheTeam ? <MeetTheTeam teamMembers={teamMembers}/> : null
      }
    </main>
  );
}
