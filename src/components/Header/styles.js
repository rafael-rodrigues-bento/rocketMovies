import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12.3rem;

  h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 6.4rem;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6.4rem;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 0.6rem;
    align-items: flex-end;
    line-height: 2.4rem;
    white-space: nowrap;
  }
`
