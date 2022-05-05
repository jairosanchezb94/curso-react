/*const getImagenPromesa = () => 
    new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') );


getImagenPromesa().then(console.log);*/

// Uso de async await

const getImage = async () => {

    try {

    const apiKey = 'l1hs2qFu6MTU7lunYuCcasqN0hJVrOrr';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();

    //console.log(data);

    const { url } = data.images.original;

    const imag = document.createElement('img');
    imag.src = url;
    document.body.append(imag);

    } catch (error) {
        // manejo del error
        console.error(error);
        
    }

    
}


getImage();