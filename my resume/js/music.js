window.onload = function(){
	var myAudioStyle = document.getElementById('myMusic');
            	var myAudio = document.getElementsByTagName('audio')[0];
				//��������ȥʱ�����
            	myAudioStyle.onmouseenter = function(){
            			if(myAudio.paused){
            				myAudioStyle.className = 'ztchange';
            			}else{
            				myAudioStyle.className = 'bfchange';
            				}
      			 }
      			 //�����ͷ��ʱ���������ֲ���
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
      		 //�������ƿ�ʱ��ȥ����
      			myAudioStyle.onmouseleave = function(){
            		myAudioStyle.className = '';
            		}	
}
