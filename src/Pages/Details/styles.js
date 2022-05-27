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
  }
`
export const Content = styled.div`
  max-width: 103rem;
  margin: 0 auto;

  > h1 {
    font-size: 3.6rem;
    line-height: 4.7rem;
    margin-top: 2.4rem;
  }
`
