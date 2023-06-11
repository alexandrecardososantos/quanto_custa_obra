import { ContentWrap } from "./styles"
import AreaConstruida from "./AreaConstruida/AreaConstruida"
import Muro from './Muro/Muro'
import Piscina from './Piscina/Piscina'
import PisoExterno from './PisoExterno/PisoExterno'
import Paisagismo from './Paisagismo/Paisagismo'
import BotaoCalcular from './BotaoCalcular/BotaoCalcular'
import CustoEstimadoEtapa from './CustoEstimadoEtapa/CustoEstimadoEtapa'
import PadraoAcabamento from './PadraoAcabamento/PadraoAcabamento'
import CustoEstimadoFinal from './CustoEstimadoFinal/CustoEstimadoFinal'

export default function Formulario01() {

  return (
    <ContentWrap>
      <h3>Insira as informações abaixo:</h3>
      <div className="boxWrap">
        <div className="formulario">
          <form>
            <AreaConstruida />
            <Muro />
            <Piscina />
            <PisoExterno />
            <Paisagismo />
            <BotaoCalcular />
            <CustoEstimadoEtapa />
            <PadraoAcabamento />
            <CustoEstimadoFinal />
          </form>
        </div>
      </div>
    </ContentWrap>
  );
}