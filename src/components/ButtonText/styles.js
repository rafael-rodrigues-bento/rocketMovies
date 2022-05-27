import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.GRAY : theme.COLORS.PINK};
  border: none;
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`
