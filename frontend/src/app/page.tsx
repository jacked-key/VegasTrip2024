'use client';
import React from 'react';
import Welcome from './_components/welcome';
import MeetTheTeam from './_components/meetTheTeam/meetTheTeam';
import { teamMembers } from './_team/team_member';
import backgroundImage from './_components/background.jpg'


export default function Home() {
  const [meetTheTeam, setMeetTheTeam] = React.useState(false);

  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% 100%',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Welcome setLoaded={setMeetTheTeam} />
        {meetTheTeam ? <MeetTheTeam teamMembers={teamMembers} /> : null}
      </div>
    </main>
  );
}
