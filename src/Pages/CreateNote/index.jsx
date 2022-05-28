import { Container, Form, TextArea } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'


export function CreateNote(){
  return (
    <Container>
      <Header/>
      <main>
        <Form>
          <ButtonText title="voltar" />
          <h1>Novo filme</h1>
          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota(de 0 a 5)" />
          </div>
            <TextArea placeholder="Observações" />
            <p>Marcadores</p>
          <div className='tags'>
            <NoteItem value="Comédia" />
            <NoteItem placeholder="Novo marcador" isNew />
          </div>
          <div className='buttons'>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
          
        </Form>
      </main>
    </Container>
  )
}