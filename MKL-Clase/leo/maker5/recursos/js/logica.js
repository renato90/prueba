$(document).ready(function(){
	for (var i = 0; i < data.length; i++) {
		producto(data[i].titulo,data[i].imagen,data[i].descripcion);
	}

	// $.getJSON("http://www.ashdjgasdhgas.com/datos", function(datos) {
 //        alert("Dato: " + datos["dato"]);
 //        $.each(datos.primos, function(idx,primo) {
 //            alert("Numero primo: " + primo);
 //        });
 //    });

});

function producto(titul,urlimg,descrip){
	$("#listado").append(
		'<div class="caja">'+
		'	<div class="content">'+
		'		<div class="titulo">'+titul+'</div>'+
		'		<div class="image">'+
		'			<img src="'+urlimg+'" alt="">'+
		'		</div>'+
		'		<div class="description">'+descrip+'</div>'+
		'	</div>'+
		'</div>'
	);
}

var data=[
{
	"titulo":"merlo-p26.5",
	"imagen":"recursos/img/merlo-p-38-14-ee.png",
	"descripcion": "Lorem ipsum"
},
{
	"titulo":"merlo-p27.5",
	"imagen":"recursos/img/merlo-p-38-14-ee.png",
	"descripcion": "Lorem ipsum"
},
{
	"titulo":"merlo-p24.5",
	"imagen":"recursos/img/merlo-p-38-14-ee.png",
	"descripcion": "Lorem ipsum"
},
{
	"titulo":"merlo-p67.5",
	"imagen":"recursos/img/merlo-p-38-14-ee.png",
	"descripcion": "Lorem ipsum"
},
{
	"titulo":"merlo-pqw.5",
	"imagen":"recursos/img/merlo-p-38-14-ee.png",
	"descripcion": "Lorem ipsum"
},
{
	"titulo":"merlo-p254.5",
	"imagen":"recursos/img/merlo-p-38-14-ee.png",
	"descripcion": "Lorem ipsum"
},
{
	"titulo":"merlo-p2655.5",
	"imagen":"recursos/img/merlo-p-38-14-ee.png",
	"descripcion": "Lorem ipsum"
}
];
