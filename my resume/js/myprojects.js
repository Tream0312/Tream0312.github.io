      
				var aLeft = document.getElementById('projectimg').children[0];
				var aRight = document.getElementById('projectimg').children[1];
				//获取列表
				var lists = document.getElementById('projectlist').children;
				//console.log(aLeft);
				//console.log(aRight);
				//改变list样式
				function allChange (){
					for(var i = 0;i<lists.length;i++){
					lists[i].style.color = '#FA96B5';
					lists[i].style.backgroundColor = '#fff';
					}
				}
				//遍历所有LIST
					for(var i = 0;i<lists.length;i++){		
					lists[i].onclick = function(){
						//console.log(this.innerText);
						allChange();
						this.style.color = '#fff';
						this.style.backgroundColor = '#FA96B5'						
						var i = parseInt(this.innerText);
						switch(i){
							case 1 : 
							aLeft.style.backgroundImage = 'url(img/1.png)';
							aLeft.setAttribute('href','https://tream0312.github.io/xiaomi/');
							aRight.style.backgroundImage = 'url(img/2.png)';
							aRight.setAttribute('href','https://tream0312.github.io/yanda/');
							break;
							case 2 :
							aLeft.style.backgroundImage = 'url(img/3.png)';
							aLeft.setAttribute('href','https://tream0312.github.io/zhongguan/');
							aRight.style.backgroundImage = 'url(img/4.png)';
							aRight.setAttribute('href','http://miniwork.net.cn/')
							break;
							case 3 :
							aLeft.style.backgroundImage = 'url(img/5.png)';
							aLeft.setAttribute('href','http://k.ahxfk.com/')
							aRight.style.backgroundImage = 'url(img/6.png)';
							aRight.setAttribute('href','http://www.58dgj.com/')
						}
					}
				}