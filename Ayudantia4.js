$(document).ready(function(){

var letrasj = $(".letras");

letrasj.click(function(){
    $(this).fadeTo("fast", 0);
});

letrasj.click(function(){
    $(this).fadeTo("fast",1);
});


var cambio = $(".d");

cambio.click(function(){
    $(this).css("color", "green");

})

var texto = $(".b");

texto.click(function(){
    $(this).text("HOLA");

})


});