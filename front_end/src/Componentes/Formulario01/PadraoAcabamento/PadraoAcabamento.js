export default function PadraoAcabamento() {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="4">Custo estimado por padrão de acabamento</th>
          </tr>
          <tr>
            <th width="30%">Padrão de imóvel</th>
            <th width="30%">Custo/m²</th>
            <th>Custo estimado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="titulo_fixo1">Simples</td>
            <td>R$ 1.600,00</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
          <tr>
            <td className="titulo_fixo1">Médio</td>
            <td>R$ 1.900,00</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
          <tr>
            <td className="titulo_fixo1">Alto</td>
            <td>R$ 2.500,00</td>
            <td className="custo_estimado">{ 0 || "R$ 0,00"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}