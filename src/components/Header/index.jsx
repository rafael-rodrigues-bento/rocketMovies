import { Container, Profile } from './styles';
import { ButtonText } from '../ButtonText';
import { Input } from '../Input';
import { Link } from "react-router-dom"

export function Header(){
  return (
    <Container>
      <h1>
      RocketMovies
      </h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <span>Rafael Bento</span>
          <ButtonText title="sair" />
        </div>
        <Link to="/profile">
          <img className='avatar' src="https://github.com/rafael-rodrigues-bento.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
    
  )
}