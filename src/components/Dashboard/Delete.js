import React from 'react';
import Swal from 'sweetalert2';

const Delete = ({ selectedEmployee, setEmployees, setDeleting }) => {
  const id = selectedEmployee.id;
  const firstName = selectedEmployee.firstName;
  const lastName = selectedEmployee.lastName;

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará al empleado permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // En lugar de modificar directamente 'employees', llamaremos a una función para eliminar el empleado en el componente principal.
        const updatedEmployees = setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
        
        // Actualizamos 'employees' y cerramos el componente Delete.
        setDeleting(false);

        // También podrías realizar acciones adicionales, como la eliminación en el almacenamiento local, si es necesario.
        localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));

        Swal.fire({
          icon: 'success',
          title: '¡Eliminado!',
          text: `${firstName} ${lastName} ha sido eliminado.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="small-container">
      <h1>Eliminar Empleado</h1>
      <p>¿Seguro que deseas eliminar a {firstName} {lastName}?</p>
      <div style={{ marginTop: '30px' }}>
        <button onClick={handleDelete}>Eliminar</button>
        <input
          style={{ marginLeft: '12px' }}
          className="muted-button"
          type="button"
          value="Cancelar"
          onClick={() => setDeleting(false)}
        />
      </div>
    </div>
  );
};

export default Delete;