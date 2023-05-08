export class MainForm extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML= /* html */`
        <div class="card">
        <h5 class="card-header">TIQUETES</h5>
        <div class="card-body">
            <div class="container">
                <div class="row g-3">
                    <div class="col-12">
                        <form id = "frmData">
                            <div class="row g-3">
                                <div class="col-4">
                                    <label for="fechaVuelo" class="form-label">Fecha de Vuelo</label>
                                    <input type="date" class="form-control" id="fechaVuelo" name="fechaVuelo">   
                                    <box-icon name='dollar-circle'></box-icon>
                                </div>
                                <div class="col-4">
                                    <label for="nombres" class="form-label">Nombre del Cliente</label>
                                    <input type="text" class="form-control" id="nombres" name="nombres">
                                </div>
                                <div class="col-4">
                                    <label for="apellidos" class="form-label">Apellidos del Cliente</label>
                                    <input type="text" class="form-control" id="apellidos" name="apellidos">                  
                                </div>
                            </div>
                            <div class="row g-3">
                                 <div class="col-4">
                                        <label for="email" class="form-label">Email cliente</label>
                                        <input type="email" class="form-control" id="email" name="email">
                                </div>
                                <div class="col-4">
                                    <label for="nroMovil" class="form-label">Numero Movil</label>
                                    <input type="text" class="form-control" id="nroMovil" name="nroMovil">                  
                                </div>
                                <div class="col-4">
                                    <label for="PrefHora" class="form-label">Preferencia Horaria</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected style="">Seleccione el tipo</option>
                                        <option value="1">Primera Hora</option>
                                        <option value="2">Diurna</option>
                                        <option value="3">Medio Día</option>
                                        <option value="4">Tarde-noche</option>
                                        <option value="5">Nocturna</option>
                                     </select>               
                                </div>
                            </div>
                            <div class="container mt-4 text-center">
                                <a href="#" class="btn btn-success" id="btnGuardar">Guardar cliente</a>
                            </div>
                        </form>                         
                    </div>
                </div>
            </div>                     
        </div>
    </div>
        `
    }
}
customElements.define('main-form',MainForm);