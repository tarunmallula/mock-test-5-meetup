import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import MeetUpContext from './context/MeetupContext'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isRegister: false,
    name: '',
    topic: 'Arts and Culture',
    registerError: false,
  }

  updateName = updateName => {
    this.setState({name: updateName})
  }

  updateTopic = updateTopic => {
    this.setState({topic: updateTopic})
  }

  changeRegistrationStatus = () => {
    this.setState({isRegister: true})
  }

  updateError = response => {
    this.setState({registerError: response})
  }

  render() {
    const {isRegister, name, topic, registerError} = this.state

    return (
      <MeetUpContext.Provider
        value={{
          isRegister,
          name,
          topic,
          changeRegistrationStatus: this.changeRegistrationStatus,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
          registerError,
          updateError: this.updateError,
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
