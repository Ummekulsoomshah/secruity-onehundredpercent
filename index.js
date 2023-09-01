const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pw1=document.getElementById("inp")
let pw2=document.getElementById("inp1")
function generatepass(){
    pw1.innerHTML=''
    for(let i=0;i<15;i++){
        let random1=characters[Math.floor(Math.random()*characters.length)]
        pw1.innerText+=random1

    }
    pw2.innerHTML=''
    for(let i=0;i<15;i++){
        let random2=characters[Math.floor(Math.random()*characters.length)]
        pw2.innerText+=random2

    }
}