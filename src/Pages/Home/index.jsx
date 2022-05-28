import { Container } from './styles'
import { Note } from "../../components/Note"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'

export function Home(){
  return (
    <Container>
      <Header/>
      <main>

     
      <header>
        <h2>Meus filmes</h2>
        <Link to="/create">
          <Button title="+ Adicionar filme"/>
        </Link>
      </header>
      <Link to="/details/1">
        <Note data={{
            title: "Interestellar",
            tags: [
              { id: 1, name: "Ficção Científica"},
              { id: 2, name: "Drama"},
              { id: 3, name: "Família"}
            ]
          }}/>
        </Link>

        <Link to="/details/1">
        <Note data={{
            title: "Interestellar",
            tags: [
              { id: 1, name: "Ficção Científica"},
              { id: 2, name: "Drama"},
              { id: 3, name: "Família"}
            ]
          }}/>
        </Link>

        <Link to="/details/1">
        <Note data={{
            title: "Interestellar",
            tags: [
              { id: 1, name: "Ficção Científica"},
              { id: 2, name: "Drama"},
              { id: 3, name: "Família"}
            ]
          }}/>
        </Link>
        
      
       </main>
    </Container>
  )
}