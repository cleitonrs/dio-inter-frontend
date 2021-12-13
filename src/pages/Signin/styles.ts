import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Background = styled.div<{image: any}>`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 50vh;
  background-image: url(${({image}) => image});
  background-size: contain;
  z-index: 1;
`

export const InputContainer = styled.div`
  margin-top: 67px;
  width: 90%;
  flex: 1;
`

export const ButtonContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.secondary}

    a {
      font-size: 1rem;
      font-weight: 700;
    }
  }
`