
const descargarUsuarios = cantidad => new Promise((resolve, reject) =>  {

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`


    ///llamados ajax
    const xhr = new XMLHttpRequest();
    
    // abrir conexion
    xhr.open('GET', api, true)
    
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results)
        } else {
            reject(Error(xhr.statusText))
        }
    }
    
    xhr.send()
});

descargarUsuarios(15)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error ('Hubo un error' + error)
        )
    );

    function imprimirHTML(usuarios) {
        let html = '';
        usuarios.forEach( usuario => {
            html += `
                <li> 
                    Nombre: ${usuario.name.first} ${usuario.name.last}
                    País: ${usuario.nat}
                    Imagen:
                        <img src="${usuario.picture.medium}" >
                </li>
            `;

        });
        const contenedorApp = ducument.querySelector('#app');
        contenedorApp.innerHTML = html;
        
    }

