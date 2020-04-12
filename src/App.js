import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const techs = localStorage.getItem('techs');

    if (techs) {
      setTechs(JSON.parse(techs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>{techSize}</strong> <br />
      <input
        type="text"
        placeholder="Nome da nova tecnologia..."
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
      /> <br />
      <button type="button" onClick={handleAddTech}>
        Adicionar Tecnologia
    </button>
    </>
  )
}

export default App;
