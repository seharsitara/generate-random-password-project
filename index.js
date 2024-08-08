const displayPassword=document.getElementById('password');
const btn=document.getElementById("btn");
const img=document.getElementById('img');
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const count="0123456789";
const symbol="!@#$%^&*()_+-={}[]\|<>?/";
const  allChar=upperCase+lowerCase+count+symbol;


function createPassword(){
    let password="";
    password=password+upperCase[Math.floor(Math.random()*upperCase.length)];
    password=password+lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password=password+count[Math.floor(Math.random()*count.length)];
    password=password+symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password=password+allChar[Math.floor(Math.random()*allChar.length)];

    }
    displayPassword.value=password;
}

function copyPassword(){
    password.select();
    document.execCommand('copy');
}

btn.addEventListener('click',()=>{
    createPassword();
});
img.addEventListener('click',copyPassword);