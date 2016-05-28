var lista=[3,5,["bye",4,2],7,"hola"];
var lista2=[3,5,"hola"];
var persona=[
{
	"nombre": "leo",
	"edad": 30,
	"ciudad": "lima"
},
{
	"nombre": "miguel",
	"edad": 20,
	"ciudad": "cusco"
},
{
	"nombre": "eduardo",
	"edad": 32,
	"ciudad": "trujillo"
}
];

function imprimir(x){
	for (var i = 0; i < x.length; i++) {
		console.log("nombre: "+x[i].nombre);
		console.log("edad: "+x[i].edad);
		console.log("ciudad: "+x[i].ciudad);
	}
}

$( document ).ready(function() {
  	$("#boton").click(function() {
  		$("#name").empty();
  		$("#year").empty();
  		$("#city").empty();
  		var name=$("#amigo").val();
  		var result={};
  		result=buscar(name,persona);
  		if($.isEmptyObject(result)){
  			$("#name").append("No exite el usuario");
  		}else{
	  		$("#name").html("nombre: " +result.nombre);
	  		$("#year").html("edad: " +result.edad);
	  		$("#city").html("ciudad: " +result.ciudad);
  		}
	});
});
function buscar(nameamigo,listado){
	var amigo={};
	for (var i = 0; i < listado.length; i++) {
		if(nameamigo==listado[i].nombre){
			amigo=listado[i];
			return amigo;
		}
	}
	return amigo;
}