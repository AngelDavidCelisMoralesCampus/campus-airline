export class MainMenu extends HTMLElement{
    constructor(){
        super();   
        this.render();    
    }
    render(){
        this.innerHTML=/* html */ `
        <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Campus Airline</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link align-middle px-0">
                                <i class='bx bx-home-alt'></i> <span class="ms-1 d-none d-sm-inline">Inicio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <i class='bx bx-user-plus' ></i> <span class="ms-1 d-none d-sm-inline">Tiquetes</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class='bx bx-search-alt-2' ></i> <span class="ms-1 d-none d-sm-inline">Rutas</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class='bx bx-search-alt-2' ></i> <span class="ms-1 d-none d-sm-inline">Personal</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class='bx bx-search-alt-2' ></i> <span class="ms-1 d-none d-sm-inline">Fidelizacion</span> </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col py-3">
                <div class="container" id="lstClientes">
                    <custom-list></custom-list>
                </div>
                <!-- Modal -->
                <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Compra de Tiquetes</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <main-form></main-form>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('main-nav', MainMenu);