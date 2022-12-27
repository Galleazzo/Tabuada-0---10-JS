
function calc(){

var j=document.getElementById('n1')


var res=document.getElementById('res');

var j=Number(j.value);

var j=j

for(i=0;i<11;i++){
    res.innerHTML+=`${j} x ${i} = ${i*j} <br>`;
}

}