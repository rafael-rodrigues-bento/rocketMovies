import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: rgba(255, 133, 155, 0.05);
  border: none;
  border-radius: 10px;
  padding: 3.2rem;
  margin-bottom: 1.6rem;
  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    display: flex;
    margin-top: 0.8rem;
    gap: 0.7rem;
  }

  > p {
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 1.5rem;
    text-align: justify;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`
