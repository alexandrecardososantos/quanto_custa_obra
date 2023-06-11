import React, {useState} from 'react';

export default function Formulario01() {

  const [areaConstruida, setAreaConstruida] = useState();

  const [frenteFundo, setFrenteFundo] = useState();
  const [laterais, setLaterais] = useState();
  const [precoMuro, setPrecoMuro] = useState(0);

  const [piscina, setPiscina] = useState();
  const [precoPiscina, setPrecoPiscina] = useState(0);

  const [pisoExterno, setPisoExterno] = useState();
  const [precoPisoExterno, setPrecoPisoExterno] = useState(0);

  const [paisagismo, setPaisagismo] = useState();
  const [precoPaisagismo, setPrecoPaisagismo] = useState(0);

  const [precoPadraoSimples, setPrecoPadraoSimples] = useState(0);
  const [precoPadraoSimplesMoveis, setPrecoPadraoSimplesMoveis] = useState(0);

  const [precoPadraoMedio, setPrecoPadraoMedio] = useState(0);
  const [precoPadraoMedioMoveis, setPrecoPadraoMedioMoveis] = useState(0);

  const [precoPadraoAlto, setPrecoPadraoAlto] = useState(0);
  const [precoPadraoAltoMoveis, setPrecoPadraoAltoMoveis] = useState(0);

  function calculate(e) {

    e.preventDefault();

    setPrecoMuro( (((frenteFundo*2) + (laterais*2)) * 150).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) );
    setPrecoPiscina( (piscina*1500).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) );
    setPrecoPisoExterno( (pisoExterno*200).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) );
    setPrecoPaisagismo( (paisagismo*400).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) );

    setPrecoPadraoSimples( ((areaConstruida*1600) + (((frenteFundo*2) + (laterais*2)) * 150) + (pisoExterno*200)).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) )
    setPrecoPadraoSimplesMoveis( (((areaConstruida*1600) + (((frenteFundo*2) + (laterais*2)) * 150) + (pisoExterno*200)) + ((areaConstruida*1600) + (((frenteFundo*2) + (laterais*2)) * 150) + (pisoExterno*200))*0.5).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }))
    setPrecoPadraoMedio( ((areaConstruida*1900) + (((frenteFundo*2) + (laterais*2)) * 150) + (pisoExterno*200) + (piscina*1500) + (paisagismo*400)).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) )
    setPrecoPadraoMedioMoveis( (((areaConstruida*1900) + (((frenteFundo*2) + (laterais*2)) * 150) + (pisoExterno*200) + (piscina*1500) + (paisagismo*400)) + ((areaConstruida*1900) + (((frenteFundo*2) + (laterais*2)) * 150) + (pisoExterno*200) + (piscina*1500) + (paisagismo*400))*0.5).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }))
    setPrecoPadraoAlto( ((areaConstruida*2500) + (((frenteFundo*2) + (laterais*2)) * 150) + (pisoExterno*200) + (piscina*1500) + (paisagismo*400)).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) )
    setPrecoPadraoAltoMoveis( (((areaConstruida*2500) + (((frenteFundo*2) + (laterais*2)) * 150) + (pisoExterno*200) + (piscina*1500) + (paisagismo*400)) + ((areaConstruida*2500) + (((frenteFundo*2) + (laterais*2)) * 150) + (pisoExterno*200) + (piscina*1500) + (paisagismo*400))*0.5).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }))
  }

  return (
    <ContentWrap>
      <h3>Insira as informações abaixo:</h3>
      <div className="boxWrap">
        <div className="formulario">
          <form>
            <label className="area_construida">Área construída (m²):</label>
            <input
              placeholder="Área construída (m²)"
              type="text"
              // defaultValue={0}
              value={areaConstruida || ""}
              onChange={(ev) => setAreaConstruida(+ev.target.value)}
            />
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Muro (terreno retangular)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="titulo_fixo1">Preço médio (m²):</td>
                  <td>R$ 150,00</td>
                </tr>
                <tr>
                  <td className="titulo_fixo1">Frente e fundo (m):</td>
                  <td>
                    <input
                      placeholder="Metros"
                      type="text"
                      // defaultValue={0}
                      value={frenteFundo || ""}
                      onChange={(ev) => setFrenteFundo(+ev.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="titulo_fixo1">Laterais (m):</td>
                  <td>
                    <input
                      placeholder="Metros"
                      type="text"
                      // defaultValue={0}
                      value={laterais || ""}
                      onChange={(ev) => setLaterais(+ev.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Piscina</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="titulo_fixo1">Preço médio (m²):</td>
                  <td>R$ 1.500,00</td>
                </tr>
                <tr>
                  <td className="titulo_fixo1">Tamanho (m²):</td>
                  <td>
                    <input
                      placeholder="Metros"
                      type="text"
                      // defaultValue={0}
                      value={piscina || ""}
                      onChange={(ev) => setPiscina(+ev.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Piso externo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="titulo_fixo1">Preço médio (m²):</td>
                  <td>R$ 200,00</td>
                </tr>
                <tr>
                  <td className="titulo_fixo1">Piso externo (m²):</td>
                  <td>
                    <input
                      placeholder="Metros"
                      type="text"
                      // defaultValue={0}
                      value={pisoExterno || ""}
                      onChange={(ev) => setPisoExterno(+ev.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Paisagismo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="titulo_fixo1">Preço médio (m²):</td>
                  <td>R$ 400,00</td>
                </tr>
                <tr>
                  <td className="titulo_fixo1">Paisagismo (m²):</td>
                  <td>
                    <input
                      placeholder="Metros"
                      type="text"
                      // defaultValue={0}
                      value={paisagismo || ""}
                      onChange={(ev) => setPaisagismo(+ev.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn_calc" onClick={calculate}>
              Calcular
            </button>
            <table>
              <thead>
                <tr>
                  <th colSpan="2" className="titulo_fixo2">Custo estimado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Muro:</td>
                  <td className="custo_estimado">{ precoMuro || "R$ 0,00"}</td>
                </tr>
                <tr>
                  <td>Piscina:</td>
                  <td className="custo_estimado">{ precoPiscina || "R$ 0,00"}</td>
                </tr>
                <tr>
                  <td>Piso externo:</td>
                  <td className="custo_estimado">{ precoPisoExterno || "R$ 0,00"}</td>
                </tr>
                <tr>
                  <td>Paisagismo:</td>
                  <td className="custo_estimado">{ precoPaisagismo || "R$ 0,00"}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colSpan="4">Custo estimado final</th>
                </tr>
                <tr>
                  <th width="22%">Padrão de imóvel</th>
                  <th width="25%">Custo/m²</th>
                  <th>Obra</th>
                  <th>Obra + Móveis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="titulo_fixo1">Simples</td>
                  <td>R$ 1.600,00</td>
                  <td className="custo_estimado">{ precoPadraoSimples || "R$ 0,00"}</td>
                  <td className="custo_estimado">{ precoPadraoSimplesMoveis || "R$ 0,00"}</td>
                </tr>
                <tr>
                  <td className="titulo_fixo1">Médio</td>
                  <td>R$ 1.900,00</td>
                  <td className="custo_estimado">{ precoPadraoMedio || "R$ 0,00"}</td>
                  <td className="custo_estimado">{ precoPadraoMedioMoveis || "R$ 0,00"}</td>
                </tr>
                <tr>
                  <td className="titulo_fixo1">Alto</td>
                  <td>R$ 2.500,00</td>
                  <td className="custo_estimado">{ precoPadraoAlto || "R$ 0,00"}</td>
                  <td className="custo_estimado">{ precoPadraoAltoMoveis || "R$ 0,00"}</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </ContentWrap>
  );
}