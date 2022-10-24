import styled from 'styled-components'
import bannerImg from '../../assets/background.svg'

export const HeaderContainer = styled.header`
  @media (max-width: 37.5em) {
    width: 100%;
    padding-top: 7rem;
  }

  background: url(${bannerImg}) no-repeat;
  background-size: cover;
  padding-top: 10rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 60vw;
    margin: 0 auto;
    padding: 1rem 1rem 13rem;
    gap: 1rem;
  }
`
