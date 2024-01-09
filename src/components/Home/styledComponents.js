import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  min-height: 100vh;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const Logo = styled.img`
  width: 170px;
  height: 50px;
  align-self: flex-start;
`
export const Heading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 500;
  margin-top: 100px;
`
export const Caption = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 400;
  margin-top: 0px;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  height: 40px;
  outline: none;
  cursor: pointer;
`
export const Image = styled.img`
  width: 65%;
  margin-top: 50px;
`
export const RegisterName = styled.h1`
  color: #2563eb;
  font-family: 'Roboto';
  font-size: 64px;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 10px;
`
export const Topic = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 700;
  margin-top: 0px;
`
