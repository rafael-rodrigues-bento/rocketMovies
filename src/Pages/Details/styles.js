import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    margin-top: 4rem;
    grid-area: content;
    overflow-y: scroll;
    overflow: auto;
  }
`
export const Content = styled.div`
  max-width: 200rem;
  margin: 0 12rem;

  > div {
    font-size: 1.8rem;
    line-height: 4.7rem;
    margin-top: 2.4rem;
    margin-bottom: 4rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
      margin-right: 1.9rem;
    }

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    span {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }

  > p {
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-align: justify;

    margin-top: 4rem;
  }
`
