import './App.css'
import { AppWrap } from './appStyles'
import Header from './Componentes/Header/header'
// import Content from './Componentes/Content/content'
import MsgInicial from './Componentes/MensagemInicial/MsgInicial'
import Formulario01 from './Componentes/Formulario01/formulario01'

function App() {
  return (
    <AppWrap>
      <Header />
      <MsgInicial />
      {/* <Content /> */}
      <Formulario01 />
    </AppWrap>
  )
}

export default App;
