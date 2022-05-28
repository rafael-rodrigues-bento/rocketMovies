import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > h2 {
    font-size: 2.4rem;
    margin-block: 4rem;
  }
  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
  > div:last-child {
    margin-top: 4rem;
    align-self: center;
  }

  > div a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`
