import { Container } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

export function CreateNote(){
  return (
    <Container>
      <Header/>
      <ButtonText title="Voltar"/>
      <h2>Novo Filme</h2>
    </Container>
  )
}