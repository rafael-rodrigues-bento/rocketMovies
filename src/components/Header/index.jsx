import { Container, Profile } from './styles';
import { ButtonText } from '../ButtonText';
import { Input } from '../Input';

export function Header(){
  return (
    <Container>
      <h1>
      RocketMovies
      </h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <span>Rafael Bento</span>
          <ButtonText title="sair" />
        </div>

        <img src="https://github.com/rafael-rodrigues-bento.png" alt="Foto do usuário" />
      </Profile>
    </Container>
    
  )
}