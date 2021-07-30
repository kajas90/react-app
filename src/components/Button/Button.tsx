import React, { FC } from 'react'
import styled from 'styled-components'
import { colors } from '../../shared/theme'

export const Button: FC = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

const StyledButton = styled.button`
  background: ${colors.violet};
  color: ${colors.white};
  padding: 8px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${colors.middleBlueGreen};
  }
`
