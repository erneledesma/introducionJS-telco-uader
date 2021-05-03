
const apiKey='Ag485HToIJoDXg4aLsf853Sa6zqOVI4o';

const petecion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

petecion
    .then( resp => resp.json() )
    .then( ({ data }) => {
       const { url } =  data.images.original;

       const img = document.createElement('img');
       img.src = url

       document.body.append( img );

    })
    .catch( console.warn );
