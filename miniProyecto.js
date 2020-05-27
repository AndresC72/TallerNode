const express = require('express'),
    app = express(),
    path = require('path'), // Patch es uno de los 34 modulos de Node
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

    

//Nos permite ubicar los archivos de la carpeta public (css & img) 
app.use(express.static( path.join(__dirname, "/public"))); 

// USO DE MIDDLEWARES
app.use(cookieParser());
app.use(cookieSession({secret: "Im a secret"}));


// Creamos las rutas de nuestra aplicacion

app.get('/', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/view/index.html`);
});


app.get('/usuario', (peticion, respuesta)=>{

    respuesta.sendFile(`${__dirname}/view/usuario.html`);

    peticion.session.visitas || (peticion.session.visitas= 0);
   let n = peticion.session.visitas ++
   console.log(`Visita # ${n}`);

});

//Declarar la ruta en la cual queremos que se active la cookie 

app.get('/', (peticion, respuesta)=>{

    /*
        if(petcion.session.visitas){
            n = peticion .session.visitas++
        ]else{
            peticion.session.visitas = 0
        }

    */
   peticion.session.visitas || (peticion.session.visitas= 0);
   let n = peticion.session.visitas ++
   console.log(`Visita # ${n}`);
});




app.get('/usuario-login/?', (peticion, respuesta)=>{

    if(peticion.query.nombre !== "" && peticion.query.password !== ""){
        respuesta.sendFile(`${__dirname}/view/usuario-login.html`);
        console.log(peticion.query);
        }else{
            respuesta.sendFile(`${__dirname}/view/denegado.html`);
    }
});

app.listen(3000);
console.log('Funciona');














