import MeetUpContext from '../../context/MeetupContext'

import {
  BgContainer,
  NavLink,
  Logo,
  Heading,
  Caption,
  Button,
  Image,
  RegisterName,
  Topic,
} from './styledComponents'

const Home = () => (
  <MeetUpContext.Consumer>
    {value => {
      const {name, topic, isRegistered} = value

      return isRegistered ? (
        <BgContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <RegisterName>Hello {name}</RegisterName>
          <Topic>Welcome to {topic}</Topic>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </BgContainer>
      ) : (
        <BgContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <Heading>Welcome to Meetup</Heading>
          <Caption>Please register for the topic</Caption>
          <NavLink to="/register">
            <Button>Register</Button>
          </NavLink>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </BgContainer>
      )
    }}
  </MeetUpContext.Consumer>
)
export default Home
