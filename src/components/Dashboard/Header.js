import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>FORMULARIO de Gestión de DATOS</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Agregar Empleado</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
        <button onClick={() => window.location.href = '/components/Tarjeta/App.css'}>Crear Tarjeta</button>
      </div>
    </header>
  );
};

export default Header;
