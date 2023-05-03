import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props =>
    props.homebg === 'true' ? '#181818' : '#f9f9f9'};
  flex-grow: 1;
  overflow-y: auto;
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 200px;
  background-size: cover;
  padding: 20px;
  @media screen and (max-width: 567px) {
    padding: 10px;
  }
`
export const BannerCloseContainer = styled.div`
  display: flex;
`
export const BannerImage = styled.img`
  width: 130px;
  height: 35px;
`
export const BannerCloseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: auto;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (max-width: 567px) {
    font-size: 15px;
  }
`
export const BannerButton = styled.button`
  border: 2px solid #000000;
  color: #000000;
  outline: none;
  background-color: transparent;
  padding: 8px 18px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
  @media screen and (max-width: 567px) {
    padding: 5px 15px;
    font-size: 12px;
  }
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  flex-grow: 1;
`
export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;

  width: 40%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 567px) {
    width: 80%;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 10px;
`
export const SearchButton = styled.button`
  height: 30px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-left: 1px solid #909090;
`
export const HomevideosContainer = styled.div`
  padding: 20px;
  @media screen and (max-width: 360px) {
    padding: 5px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
`
