var imageElement = document.querySelector('img');

imageElement.onclick = function(){
						var imgPath = imageElement.getAttribute('src');
						if(imgPath === 'images/checklist.png')
							imageElement.setAttribute('src','images/leaf-1498985_1920.jpg');
						else if(imgPath === 'images/leaf-1498985_1920.jpg')
							imageElement.setAttribute('src','images/checklist.png');
						}
						
var changeUser = document.querySelector('button');
var dynamicHeading = document.querySelector('h1');

if(!localStorage.getItem('userName'))
	newUserSignUp();
else
{
	dynamicHeading.textContent = 'Welcome to the To-Do list '+ localStorage.getItem('userName');
}

changeUser.onclick = function(){
	newUserSignUp()	
}

function newUserSignUp(){
		var userName = prompt('Enter your name');
		localStorage.setItem('userName',userName);
		dynamicHeading.textContent = 'Welcome to the To-Do list '+userName;	
}