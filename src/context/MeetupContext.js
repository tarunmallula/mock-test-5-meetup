import React from 'react'

const MeetUpContext = React.createContext({
  isRegistered: false,
  changeRegistrationStatus: () => {},
  name: '',
  topic: '',
  updateName: () => {},
  updateTopic: () => {},
  registerError: false,
  updateError: () => {},
})

export default MeetUpContext
