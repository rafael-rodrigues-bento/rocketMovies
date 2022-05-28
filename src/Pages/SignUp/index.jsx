import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock , FiUser, FiArrowLeft} from 'react-icons/fi'
import { Button } from '../../components/Button'

export function SignUp(){
  return (
    <Container>
       
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar"/>
          <div>
          <a href="/"><FiArrowLeft/> Voltar para o login</a> 
          </div>
          
          
        
      </Form>
      <Background/>
      
    </Container>
  )
}