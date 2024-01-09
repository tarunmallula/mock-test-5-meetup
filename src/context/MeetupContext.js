import React from 'react'

const MeetUpContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  isRegistered: false,
  changeName: () => {},
  changeTopic: () => {},
  toggleIsRegistered: () => {},
})

export default MeetUpContext
