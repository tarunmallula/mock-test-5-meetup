import {Component} from 'react'

import MeetUpContext from '../../context/MeetupContext'

import {
  BgContainer,
  NavLink,
  Logo,
  RegisterContainer,
  RegisterImage,
  Form,
  Title,
  Label,
  Input,
  Select,
  Option,
  RegisterNow,
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

class Register extends Component {
  render() {
    return (
      <MeetUpContext.Consumer>
        {value => {
          const {
            name,
            topic,
            changeTopic,
            toggleIsRegistered,
            changeName,
          } = value

          const onChangeName = event => {
            changeName(event)
          }

          const onChangeTopic = event => {
            changeTopic(event)
          }

          const changeToggle = () => {
            if (name !== undefined) {
              toggleIsRegistered()
            }
          }

          return (
            <BgContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <RegisterContainer>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <Form>
                  <Title>Let us join</Title>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    value={name}
                    onChange={onChangeName}
                  />
                  <Label>TOPICS</Label>
                  <Select onChange={onChangeTopic} value={topic}>
                    {topicsList.map(each => (
                      <Option key={each.id} value={each.id}>
                        {each.displayText}
                      </Option>
                    ))}
                  </Select>
                  <NavLink to="/">
                    <RegisterNow onClick={changeToggle}>
                      Register Now
                    </RegisterNow>
                  </NavLink>
                </Form>
              </RegisterContainer>
            </BgContainer>
          )
        }}
      </MeetUpContext.Consumer>
    )
  }
}

export default Register
