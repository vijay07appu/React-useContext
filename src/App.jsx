import { useState } from 'react'
import Example from './Example'
import { AuthProvider } from './AuthContext'



function App() {


  return (
    <AuthProvider>
      <Example/>

    </AuthProvider>
    
  )
}

export default App
