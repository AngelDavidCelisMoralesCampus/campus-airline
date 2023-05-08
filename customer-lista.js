export class CustomerList extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML= /* html */`
        <table class="table table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nro Documento</th>    
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Email</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="lista-clientes">
            <tr>
                <td>element</td>
                <td>element</td>
                <td>element</td>
                <td>element</td>
                <td>element</td>
                <td>
                    <button type="button" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg></button>
                    <button type="button" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg></button>
                </td>
            </tr>
        </tbody>
    </table>
        `
    }
}
customElements.define('custom-list',CustomerList);


abrirModal = () =>{
    var myModal = document.querySelector('#putCliente')
    myModal.addEventListener('shown.bs.modal', function () {
        //myInput.focus()
    })
}
requestApiGetCliente = () =>{
    getDataAll()
        .then((result)=>{
            this.renderClientes(result);
        })
}
renderClientes = (clientes)=>{
    let clientesHTML = '';
    for(let cliente of clientes){
        clientesHTML += this.crearListaClientesHTML(cliente);
    }
    document.getElementById('lista-clientes').innerHTML = clientesHTML;
    this.callModal();
    this.putData();
}
crearListaClientesHTML = (clientes)=>{
    let listaHTML = /* html */ `
    <tr>
        <td>${clientes.id}</td>
        <td>${clientes.cc}</td>
        <td>${clientes.nombres}</td>
        <td>${clientes.apellidos}</td>
        <td>${clientes.email}</td>
        <td>
                <a class="btn btn-success " data-bs-toggle="modal" data-bs-target="#putCliente" id="putData" data-idcli='${clientes.id}'><i class='bx bx-edit-alt icono' data-idcli='${clientes.id}'></i></a>
                <a class="btn btn-danger" data-idclidel='${clientes.id}'><i class='bx bx-message-alt-x icono'></i></a>
        </td>
        </tr>
    `;
    return listaHTML;
}
callModal = () =>{
    document.querySelectorAll('#putData').forEach((item,id) =>{
        item.addEventListener("click",(e) =>{
            this.idUsr=e.target.dataset.idcli;
            this.requestApiGetClienteById(e.target.dataset.idcli);
            e.stopImmediatePropagation();
            e.preventDefault();
        })
    })

}
requestApiGetClienteById = (id) =>{
    searchDataById(id)
        .then((result)=>{
            this.loadDataFrm(result);
        })
}
loadDataFrm(data, ()=>{

    const myForm = document.querySelector("#frmData");
    const {createdAt,cc,nombres,apellidos,email,telefono,fechanac,id} = data;
    const frm = new FormData(myForm);
    frm.set("createdAt",createdAt);
    frm.set("cc",cc);
    frm.set("nombres",nombres);
    frm.set("apellidos",apellidos);
    frm.set("email",email);
    frm.set("telefono",telefono);
    frm.set("fechanac",fechanac);
    // Itera a través de los pares clave-valor de los datos
    for (var pair of frm.entries()) {
        // Establece los valores correspondientes en el formulario
        myForm.elements[pair[0]].value = pair[1];
    }
})


putData = (id) =>{
    let myForm = document.querySelector("#frmData");
    myForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        opc[e.submitter.dataset.accion](data,this.idUsr);  
    })
}

