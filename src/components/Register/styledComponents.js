import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin-top: 0px;
`
export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 100px;
  align-self: center;
`
export const RegisterImage = styled.img`
  width: 35%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 46px;
  font-weight: 500;
  margin-bottom: 15px;
`
export const Label = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const Input = styled.input`
  height: 40px;
  width: 280px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  color: #7b8794;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  padding: 6px 16px 6px 16px;
  outline: none;
  margin-bottom: 20px;
`
export const Select = styled.select`
  height: 40px;
  width: 280px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 6px 16px 6px 16px;
  outline: none;
  cursor: pointer;
`
export const Option = styled.option`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
`
export const RegisterNow = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  height: 40px;
  width: 160px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`
