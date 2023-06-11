import React, {useState} from 'react';

export default function Muro() {

  const [frenteFundo, setFrenteFundo] = useState()
  const [laterais, setLaterais] = useState()

  return (
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
  );
}