function ativar() 

{
    console.log("Botão clicado!");
    document.body.style.backgroundColor = "rgb(203, 164, 239)";
    document.body.style.color = "rgb(49, 3, 92)";  
}
function  desativar() {

    console.log("Botão clicado!");
    document.body.style.backgroundColor = "rgb(144, 151, 186)";
    document.body.style.color = "rgb(246, 117, 157)";
}

function ativar() {
    console.log("Botão clicado!");
    const cor= `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
    document.body.style.backgroundColor = cor;
}