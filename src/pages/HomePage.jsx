import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import Jobs from '../components/Jobs'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <Jobs isHome={true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage