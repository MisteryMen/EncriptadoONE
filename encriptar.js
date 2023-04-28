let encriptado = [];

function encriptar(){
    let texto= document.getElementById("text1").value.toLowerCase();
    var i=0;
    console.log(texto[0]);
    while(i < texto.length){
        switch(texto[i]){
            case 'a':
                encriptado[i]='ai';
            break;
            case 'e':
                encriptado[i]='enter';
            break;
            case 'i':
                encriptado[i]='imes';
            break;
            case 'o':
                encriptado[i]='ober';
            break;
            case 'u':
                encriptado[i]='ufat';
            break;
            
            default:
                encriptado[i]=texto[i];
            break;
        }
        i++;
    }

    let muestra = encriptado.join("");
    document.getElementById("img2").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("text2").innerHTML = muestra;
}

function desencriptar(){
    let texto= document.getElementById("text1").value.toLowerCase();  
    var i=0;
   texto=texto.replace(/ai/igm,"a");
   texto=texto.replace(/enter/igm,"e");
   texto=texto.replace(/imes/igm,"i");
   texto=texto.replace(/ober/igm,"o");
   texto=texto.replace(/ufat/igm,"u");
   document.getElementById("img2").style.display = "none";
   document.getElementById("texto").style.display = "none";
   document.getElementById("text2").innerHTML = texto;
   document.getElementById("copia").style.display="show";
   document.getElementById("copia").style.display="inherit";
   

}
function copiar(){
    let copia=document.querySelector("#text2");
    copia.select();
    document.execCommand("copy");
}