
// Asicncronismo con Async - Await

const getImagen = async() => {

    const apiKey='Ag485HToIJoDXg4aLsf853Sa6zqOVI4o';
    const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data}  = await peticion.json();
    // console.log(data);

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)

}
getImagen();

