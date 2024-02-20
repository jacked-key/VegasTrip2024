import React from "react";
import Welcome from "./_components/welcome";
import MeetTheTeam from "./_components/meetTheTeam/meetTheTeam";
import { teamMembers } from "./_team/team_member";

export default function Home() {
  return (
    <main>
      <Welcome/>
      <MeetTheTeam teamMembers={teamMembers}/>
    </main>
  );
}
