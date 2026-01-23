import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import React from 'react'
import { recentSessions } from '../constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

        <section className='home-section'>
          <CompanionCard 
            id="123"
            name="Neura the Brainy Explorer"
            topic="Nural Network of the Brain"
            subject="Science"
            duration={45}
            color="#ffda6e" 
          />
          <CompanionCard 
            id="456"
            name="Neura the Brainy Explorer"
            topic="Nural Network of the Brain"
            subject="Science"
            duration={45}
            color="#e5d0ff" 
          />
          <CompanionCard 
            id="789"
            name="Neura the Brainy Explorer"
            topic="Nural Network of the Brain"
            subject="Science"
            duration={45}
            color="#BDE7FF" 
          />
        </section>

        <section className='home-section'>
          <CompanionList
              title="Recently Completed Sessions"
              companions={recentSessions}
              className ="w-2/3 max-lg:w-full "
          />
          <CTA/>
        </section>
    </main>
  )
}

export default Page