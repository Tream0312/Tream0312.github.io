window.onload = function(){
	var myAudioStyle = document.getElementById('myMusic');
            	var myAudio = document.getElementsByTagName('audio')[0];
				//当鼠标放上去时添加类
            	myAudioStyle.onmouseenter = function(){
            			if(myAudio.paused){
            				myAudioStyle.className = 'ztchange';
            			}else{
            				myAudioStyle.className = 'bfchange';
            				}
      			 }
      			 //当点击头像时，控制音乐播放
      			 	function playPause() {      			 			
      			 if (myAudio.paused){	 	
      			 	myAudioStyle.className = 'bfchange';      			 	
          			 myAudio.play();	 
      			 }
      			 else{
      			 	myAudioStyle.className = 'ztchange';
          			myAudio.pause();
      			 }
      		 }    
      		 //当鼠标放移开时，去除类
      			myAudioStyle.onmouseleave = function(){
            		myAudioStyle.className = '';
            		}	
}
