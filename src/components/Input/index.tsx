import { InputHTMLAttributes } from "react"
import { InputContainer } from "../../pages/Signin/styles"

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <InputContainer>
      <input {...props} />
    </InputContainer>
  )
}

export default Input
