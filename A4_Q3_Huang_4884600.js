window.addEventListener("load",start,false);
function start(){
	document.addEventListener("click",clickEvent,false);
}
function clickEvent(e){
	if(e.shiftKey){
		alert(e.type);
	}
	if(e.ctrlKey){
		alert(e.target.tagName.toLowerCase());
	}
}