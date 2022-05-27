import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PINK : theme.COLORS.GRAY};
  border: none;
  font-size: 1.6rem;
`
