var ul = document.getElementById("client").children[1].children[0];
var star =document.getElementById("client").children[1].children[1].children[0];
//console.log(star);
var li =ul.children;
var leader=0;var target = 0;
var i=0;
//爆款移动
function move(){
	i+=1;	
	if(i>=li.length){
		leader = 0;
		target=0;
		i=0;
	}
	else{
		ul.style.left =target+ "px";
	}
	leader = parseInt(ul.style.left)||0;
	target = i*-1080;
};
 var timer = setInterval(move,4000);
 var timer= setInterval(function(){
	leader=leader+(target-leader)/10;
	ul.style.left = leader+"px";
},30);

//知名客户LOGO移动
var k=0;
function starMove(){
	k+=2;
//	star[2].className = "bag";
if(k>4){
	star.style.left="-400px";
}
	if(k>8){
		k=0;		
	}
	for(var i=0;i<star.children.length;i++){
		star.children[i].className = "";
	}
	star.children[k].className = "bag";
	console.log(k);
	
}
 var timer3=setInterval(starMove,4000);
