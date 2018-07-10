var tile;
var tbody;
var win = false;

function start(){
	tbody = document.getElementById("tbody");
	for (var rowCount = 0; rowCount<16;rowCount+=4){
	
		tbody.innerHTML += "<tr><td id = " + (rowCount+1) +"></td><td id = " + (rowCount+2) 
		+"></td><td id = " + (rowCount+3) +"></td><td id = " + (rowCount+4) +"></td></tr>";
	}
	for (var i = 1; i<17; i++){
		tile = document.getElementById(i);
		tile.addEventListener("click",function(){play(this)},false);
	}
	for (var i = 1; i <16; i++){
		var position = Math.floor(Math.random()*16+1);
		while(document.getElementById(position).innerHTML !=""){
			position = Math.floor(Math.random()*16+1);
		}			

		document.getElementById(position).innerHTML = i;
	}
}
function play(tile){
	var target = getTarget(tile);
	if(target ==null){
		alert("invalid choice");
	}
	swapInner(tile, target);
	win = checkWin();
	if (win){
		var b = confirm("you win do you want to start again?");
		if (b){
			location.reload();
		}
	}
}
function checkWin(){
	for (var i = 1; i <16; i++){
		if(document.getElementById(i).innerHTML != i.toString()){
			return false;
		}
	}
	return true;
}
function getTarget(tile){
	var topId = parseInt(tile.id)-4;
	var rightId = parseInt(tile.id)+1;
	if(rightId % 4 ==1){
		rightId = 0;
	}
	var bottomId = parseInt(tile.id)+4;
	var leftId = parseInt(tile.id)-1;
	if(leftId < 1 || leftId % 4 == 0){
		leftId = 0;
	}
	
	if (topId >0 && document.getElementById(topId).innerHTML ==""){
		return document.getElementById(topId);
	}else if(rightId > 0 && document.getElementById(rightId).innerHTML ==""){
		return document.getElementById(rightId);
	}else if (bottomId <17 &&document.getElementById(bottomId).innerHTML==""){
		return document.getElementById(bottomId);
	}else if(leftId > 0 && document.getElementById(leftId).innerHTML ==""){
		return document.getElementById(leftId);
	}
}
function swapInner (tile, target){
	target.innerHTML = tile.innerHTML;
	tile.innerHTML = "";
}
window.addEventListener("load",start,false);