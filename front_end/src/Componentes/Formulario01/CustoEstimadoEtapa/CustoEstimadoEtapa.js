export default function CustoEstimadoEtapa() {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="2" className="titulo_fixo2">Custo estimado por etapa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Muro:</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
          <tr>
            <td>Piscina:</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
          <tr>
            <td>Piso externo:</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
          <tr>
            <td>Paisagismo:</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}