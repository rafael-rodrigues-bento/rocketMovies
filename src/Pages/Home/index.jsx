import { Container } from './styles'
import { Note } from "../../components/Note"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export function Home(){
  return (
    <Container>
      <Header/>
      <main>

     
      <header>
        <h2>Meus filmes</h2>
        <Button title="+ Adicionar filme"/>
      </header>
      <Note data={{
            title: "Interestellar",
            tags: [
              { id: 1, name: "Ficção Científica"},
              { id: 2, name: "Drama"},
              { id: 3, name: "Família"}
            ]
          }}
      /><Note data={{
        title: "Interestellar",
        tags: [
          { id: 1, name: "Ficção Científica"},
          { id: 2, name: "Drama"},
          { id: 3, name: "Família"}
        ]
      }}
  /><Note data={{
    title: "Interestellar",
    tags: [
      { id: 1, name: "Ficção Científica"},
      { id: 2, name: "Drama"},
      { id: 3, name: "Família"}
    ]
  }}
/>
       </main>
    </Container>
  )
}