"use client"

import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
const MeetingTypeList = () => {
    const router = useRouter()
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard className='bg-orange-1' img='/icons/add-meeting.svg' title='New Meeting' description='Start an instant meeting' handleClick={()=> setMeetingState('isJoiningMeeting')}/>
        <HomeCard className='bg-blue-1' img='/icons/schedule.svg' title='Schedule Meeting' description='Plan your meeting' handleClick={()=> setMeetingState('isScheduleMeeting')}/>
        <HomeCard className='bg-purple-1' img='/icons/recordings.svg' title='View Recordings' description='Check out your recordings' handleClick={()=> setMeetingState('isJoiningMeeting')}/>
        <HomeCard className='bg-yellow-1' img='/icons/join-meeting.svg' title='Join Meeting' description='Join meeting' handleClick={()=> setMeetingState('isJoiningMeeting') }/>
        <MeetingModal/>
    </section>
  )
}

export default MeetingTypeList