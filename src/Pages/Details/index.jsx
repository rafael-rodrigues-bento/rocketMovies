import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'


export function Details(){
  return(
    <Container>
      <Header />
        <main>
          <Content>
            <ButtonText title="voltar"/>
            <h1>Novo Filme</h1>
              
            
          </Content>

        </main>
      
    </Container>
    
  )
}