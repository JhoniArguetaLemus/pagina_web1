

function hello(){
    alert("haz dado click ")

    document.body.style.backgroundColor="#fff01"
}


function cambiarColor(){
    var color = '#' + Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor=color
    alert("color cambiado")
}