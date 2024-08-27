import React from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import Table from './components/Table'

function App() {
  return (
    <div className='flex flex-col items-center gap-4 bg-purple-200 h-[100vh]'>
      <Logo/>
      <Form/>
      <Table/>
    </div>
  )
}

export default App