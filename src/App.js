import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import MeetUpContext from './context/MeetupContext'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].id,
    isRegistered: false,
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeTopic = event => {
    this.setState({topic: event.target.value})
  }

  toggleIsRegistered = () => {
    this.setState(prevState => ({isRegistered: !prevState.isRegistered}))
  }

  render() {
    const {name, topic, isRegistered} = this.state
    return (
      <MeetUpContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          toggleIsRegistered: this.toggleIsRegistered,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetUpContext.Provider>
    )
  }
}
export default App
