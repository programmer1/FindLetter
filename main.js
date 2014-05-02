var d=document;function e(id){return d.getElementById(id);}function t(tg){return d.getElementByTagName(tg);}
var a=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var letter;
var w=(screen.availWidth/2)-50;
var te="<div id='l' style='position:relative;left:"+w+"px'>";
function next(){letter=a[Math.round(Math.random()*25)];e('ltr').innerHTML=te+letter;}
function f(id){//alert(id);
	if(id==letter){e('g').innerHTML="Good "+letter;next();}
	else{e('g').innerHTML='"'+id+'" not, try again';}
	//e('l').innerHTML=id;
	
}
