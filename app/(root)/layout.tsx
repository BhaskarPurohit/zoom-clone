import { StreamVideoProvider } from '@/providers/StreamClientProvider'
import React,{ReactNode} from 'react'

type Props = {
    children: React.ReactNode
}

const RootLayout = ({children}:Props) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
      
    </main>
  )
}

export default RootLayout