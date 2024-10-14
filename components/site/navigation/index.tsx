import Image from 'next/image'
import React from 'react'

type Props = {
    user?:null| User
}

const Navigation = ({user}: Props) => {
  return (
    <div className='p-4 items-centerj justify-center relative'>

        <aside className='flex items-center gap-2'>
<Image src={'/assets/plura-logo.svg'} alt='hi' width={40} height={40} />
        </aside>
    </div>
  )
}

export default Navigation