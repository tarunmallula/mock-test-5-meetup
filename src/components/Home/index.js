import {Link} from 'react-router-dom'

import MeetUpContext from '../../context/MeetupContext'

import Navbar from '../NavBar'

import {
  Container,
  Heading,
  Description,
  Button,
  RegisImg,
  AfterRegisImg,
  RegisHead,
  RegisDes,
} from './styledComponents'

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
const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  const renderRegisterView = () => (
    <>
      <Heading>Welcome to Meetup</Heading>
      <Description>Please register for the topic</Description>
      <Link to="/register">
        <Button onClick={onClickRegister}>Register</Button>
      </Link>
      <RegisImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  const renderAfterRegisterView = (name, topic) => {
    const showTopicName = topicsList.filter(each => each.id === topic)

    return (
      <>
        <RegisHead>Hello {name}</RegisHead>
        <RegisDes>{`Welcome to ${showTopicName[0].displayText}`}</RegisDes>
        <AfterRegisImg
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </>
    )
  }

  return (
    <MeetUpContext.Consumer>
      {value => {
        const {isRegister, name, topic} = value
        return (
          <>
            <Navbar />
            <Container>
              {isRegister
                ? renderAfterRegisterView(name, topic)
                : renderRegisterView()}
            </Container>
          </>
        )
      }}
    </MeetUpContext.Consumer>
  )
}

export default Home
