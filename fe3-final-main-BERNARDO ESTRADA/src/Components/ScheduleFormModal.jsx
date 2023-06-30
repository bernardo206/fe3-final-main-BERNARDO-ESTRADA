import ScheduleForm from './ScheduleForm';

const ScheduleFormModal = () => {
  return (
    <div className={`modal fade`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        {/* //En la siguiente línea, se debe realizar una prueba si la aplicación
         // está en modo oscuro y debe usar CSS correcto*/}
        <div className={`modal-content`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Selecione o dentista, paciente e a data e hora</h1>
            {/* //En la siguiente línea, se debe realizar una prueba si la aplicación
             // está en modo oscuro y debe usar CSS correcto */}
            <button type="button" className={`btn-close`} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ScheduleForm />
          </div>
        </div>
      </div>
    </div >

  );
};

export default ScheduleFormModal;
