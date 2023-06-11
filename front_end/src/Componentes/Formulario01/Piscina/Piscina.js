import React, {useState} from 'react';

export default function Piscina() {

  const [piscina, setPiscina] = useState();

  return (
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
  );
}