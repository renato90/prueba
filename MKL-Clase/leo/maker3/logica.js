/* funciones */
var edad;
edad=20;

var array =["a","b","c","d"];

function mayor(x){
	if(x>=18 && x<=25){
		console.log("Puedo acceder!!! =) ");
	}else{
		console.log("No puedo acceder =( ");
	}
}
function ciclofor(x){
	for (var i = 0; i < x.length; i++) {
		console.log(x[i]);
	}
}