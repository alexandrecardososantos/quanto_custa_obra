import React, {useState} from 'react';

export default function Paisagismo() {

  const [paisagismo, setPaisagismo] = useState();

  return (
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
  );
}