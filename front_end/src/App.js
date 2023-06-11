import './App.css'
import { AppWrap } from './appStyles'
import Header from './Componentes/Header/header'
import MsgInicial from './Componentes/MensagemInicial/MsgInicial'
import Formulario01 from './Componentes/Formulario01/formulario01'

function App() {
  return (
    <AppWrap>
      <Header />
      <MsgInicial />
      <Formulario01 />
    </AppWrap>
  )
}

export default App;
