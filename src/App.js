import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['Node', 'React']);
  const [newTech, setNewTech] = useState('');

  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nome da nova tecnologia..."
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
      />
      <button type="button" onClick={handleAddTech}>
        Adicionar Tecnologia
    </button>
    </>
  )
}

export default App;
