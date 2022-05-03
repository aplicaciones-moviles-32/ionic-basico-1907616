var arreglo = ["images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg",
    "images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg",
    "images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg",
    "images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg"];

var imagencontainer = document.getElementById("contenedorimg");
var iniciocontainer = document.getElementById("mainpage");


function showpic(contenedor, size) {

    for (var i = 0; i < arreglo.length; i++) {
        var ioncol = document.createElement("ion-col");
        var imagen = document.createElement("img");
        ioncol.size = size;
        imagen.src = arreglo[i];
        ioncol.appendChild(imagen);
        contenedor.appendChild(ioncol);
    }

}
showpic(imagencontainer, "4");

var user = {
    "name": "Cheems", 
    "correo": " cheems@cheemsification.com ", 
    "username": "@cheems", 
    "password": "conmtramseñmam", 
    "pfp": "images/cheems.jpg", 
    "fechadenacimiento": "01/01/2020", 
    "followers": "12,356" , 
    "following": "17",
    "desc":"hamganlem unm cheems",
    "images": arreglo.length
};

var feed = [
    {
        "user":"@pedillos",
        "imagen":"images/pedillos.jpg",
        "description":"x: oye porque no quieres ir a presencial?    y: unos pedillos",
        "idpub":"4752"
    },
    {
        "user":"@cheems",
        "imagen":"images/cheems.jpg",
        "description":"mem dam amnsiedamd",
        "idpub":"7542"
    },
    {
        "user":"@chihuahua",
        "imagen":"images/chihuahua.jpg",
        "description":"cute chihuahua, isn it?",
        "idpub":"2346"
    },
    {
        "user":"@pedillos",
        "imagen":"images/pedillos.jpg",
        "description":"me da unos pedillos?",
        "idpub":"2987"
    },
    {
        "user":"@pedillos",
        "imagen":"images/pedillos.jpg",
        "description":"x: joven porque no hizo la tarea?    y: unos pedillos",
        "idpub":"3469"
    },
    {
        "user":"@cheems",
        "imagen":"images/cheems.jpg",
        "description":"x: Haganle un jojo, haganle un Cheems, un Momichi, un Padoru...",
        "idpub":"4574"
    },
];

for (var i=0; i<feed.length;i++){
    var card= document.createElement("ion-card");
    var cheader= document.createElement("ion-card-header");
    var csubtitle= document.createElement("ion-card-subtitle");
    var ctitle= document.createElement("ion-card-title");
    var containerimg = document.createElement("p");
    var img= document.createElement("img");
    var ccontent= document.createElement("ion-card-content");

    csubtitle.innerHTML = feed[i].idpub;
    ctitle.innerHTML = "<img src=\""+feed[i].imagen+"\" width=\"50px\">"+"<strong>"+feed[i].user+"</strong>";
    img.src=feed[i].imagen;
    img.id="imgfeed";
    ccontent.innerText = feed[i].description;


    containerimg.appendChild(img);
    ctitle.appendChild(containerimg);
    cheader.appendChild(csubtitle);
    cheader.appendChild(ctitle);
    card.appendChild(cheader);
    card.appendChild(ccontent);
    iniciocontainer.appendChild(card);
}

var username = document.getElementById("username");
var profpic = document.getElementById("pfp");
var seguidores = document.getElementById("followers");
var seguidos = document.getElementById("following");
var descripcion = document.getElementById("desc");
var publicaciones = document.getElementById("images");

username.innerHTML = "<strong>"+user.username+"</strong>";
profpic.src = user.pfp;
seguidores.innerHTML= "<strong>"+user.followers+"</strong>";
seguidos.innerHTML = "<strong>"+user.following+"</strong>";
descripcion.innerText = user.desc;
publicaciones.innerHTML = "<strong>"+user.images+"</strong>";