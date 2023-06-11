import React, {useState} from 'react';

export default function AreaConstruida() {

  const [areaConstruida, setAreaConstruida] = useState();

  return (
    <div>
      <label className="area_construida">Área construída (m²):</label>
      <input
        placeholder="Área construída (m²)"
        type="text"
        // defaultValue={0}
        value={areaConstruida || ""}
        onChange={(ev) => setAreaConstruida(+ev.target.value)}
      />
    </div>
  )
}