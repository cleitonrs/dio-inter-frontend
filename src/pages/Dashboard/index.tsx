import Button from '../../components/Button'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle } from './styles'

const Dashboard = () => {

  const wallet = 5000
  return (
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className='h2'>Saldo Atual</h2>
            </InlineTitle>
              <InlineContainer>
                <h3 className='wallet'>
                  {wallet.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
                </h3>
              </InlineContainer>
          </Card>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className='h2'>Receber PIX</h2>
            </InlineTitle>
              <InlineContainer>
                <Input style={{flex: 1}} placeholder='Valor'/>
                <Button>Gerar Código</Button>
              </InlineContainer>

              <p className='primary-color'>Pix copia e cola</p>
              <p className='primary-color'>fdlajdlfjdlkhfdçdlflkajdlfjdçlflf</p>

          </Card>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className='h2'>Pagar PIX</h2>
            </InlineTitle>
              <InlineContainer>
                <Input style={{flex: 1}} placeholder='Insira a chave'/>
                <Button>Pagar PIX</Button>
              </InlineContainer>
          </Card>
        </div>
        <div>
        <Card noShadow width="90%">
            <InlineTitle>
              <h2 className='h2'>Extrato da Conta</h2>
            </InlineTitle>
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  )
}

export default Dashboard
