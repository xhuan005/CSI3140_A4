var tile;
window.addEventListener("load",start,false);
var table;
function start(){
	tbody = document.getElementById("tbody");
	for (var rowCount = 0; rowCount<16;rowCount+=4){
	
		tbody.innerHTML += "<tr><td id = " + (rowCount+1) +"></td><td id = " + (rowCount+2) 
		+"></td><td id = " + (rowCount+3) +"></td><td id = " + (rowCount+4) +"></td></tr>";
	}
	for (var i = 1; i <16; i++){
		var position = Math.floor(Math.random()*16+1);
		while(document.getElementById(position).innerHTML !=""){
			position = Math.floor(Math.random()*16+1);
		}			

		document.getElementById(position).innerHTML = i;
	}
}