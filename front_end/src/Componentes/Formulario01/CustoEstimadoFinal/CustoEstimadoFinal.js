export default function CustoEstimadoFinal() {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="4">Custo estimado final</th>
          </tr>
          <tr>
            <th width="30%">Padrão de imóvel</th>
            <th width="35%">Obra</th>
            <th width="35%">Obra + Móveis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="titulo_fixo1">Simples</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
          <tr>
            <td className="titulo_fixo1">Médio</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
          <tr>
            <td className="titulo_fixo1">Alto</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}