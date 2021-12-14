import { ButtonHTMLAttributes } from "react"
import { ButtonContainer } from "../../pages/Signin/styles"

const Button = (props: ButtonHTMLAttributes<HTMLInputElement>) => {
  return (
    <ButtonContainer {...props}>
      {props.children}
    </ButtonContainer>
  )
}

export default Button
