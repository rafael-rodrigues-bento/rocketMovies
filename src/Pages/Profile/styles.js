import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    height: 144px;
    background: rgba(255, 133, 155, 0.05);
    display: flex;
    align-items: center;
    padding: 0 12.4rem;
    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2.4rem;
    }

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      align-items: center;
      display: flex;
      gap: 0.8rem;
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;
  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;
  border-radius: 50%;
  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }
  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`