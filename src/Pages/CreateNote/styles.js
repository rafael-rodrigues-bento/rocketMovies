import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Form = styled.form`
  max-width: 100rem;
  margin: 4rem auto;

  div {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  p {
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 1rem;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 8px;
    padding-bottom: 1rem;
    padding-left: 1rem;
    margin-bottom: 2rem;
  }

  .buttons button:first-child {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const TextArea = styled.textarea`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 27rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;
  border: none;
  resize: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 12px;
`
