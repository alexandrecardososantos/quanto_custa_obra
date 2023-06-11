import React, {useState} from 'react';

export default function PisoExterno() {

  const [pisoExterno, setPisoExterno] = useState();

  return (
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
  );
}