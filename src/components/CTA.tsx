import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>Start Learning your Way</div>
      <h2 className='text-3xl font-bold'>
        Build and Personalize Your  Learning Companion
      </h2>
      <p>
        Pick a Name, Subject, Voice, & Personality - and learning throug voice conversations that feel natural and fun.
      </p>
      <Image
        src='images/cta.svg'
        alt='CTA Image'
        width={362}
        height={232}
        />
      <button className='btn-primary'>
        <Image
          src='/icons/plus.svg'
          alt='Plus Icon'
          width={12}
          height={12}
        />
        <Link href='/companions/new '>
            <p>Build a new Compnion</p>
        </Link>
      </button>
    </section>
  )
}

export default CTA