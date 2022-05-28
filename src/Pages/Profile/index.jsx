import { Container, Form, Avatar } from './styles'
import {FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function Profile(){
  return(
    <Container>
      <header>
        
        <a href="/"><FiArrowLeft/> Voltar</a>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/rafael-rodrigues-bento.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome de usuario"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />
        
        <Button title="Salvar"/>
      </Form>

    </Container>
  )
}