import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles"
import Card from "../../components/Card"
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useNavigate, Link } from "react-router-dom"

const SignIn = () => {
  const navigate = useNavigate()
  const handleToSignIn = () => {
    navigate('/dashboard')
  }
  return (
    <Wrapper>
      <Background image={background}/>
      <Card width="403px" height="auto">
        <img src={logoInter} width={172} height={61} alt="logo inter" /> 

        <InputContainer>
          <Input placeholder="EMAIL" />
          <Input placeholder="SENHA" type="password" />
        </InputContainer>

        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>Entrar</Button>
          <p>Ainda não é cadastrado? <Link to="/signup">Cadastre-se Já</Link></p>
        </ButtonContainer>

      </Card>
    </Wrapper>
  )
}

export default SignIn
