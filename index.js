var scroll=setInterval(function(){ 
    window.scrollBy(0,500);  
    var list = document.querySelectorAll('[aria-label="Like"]');
	for(i=0;i<list.length;i++)
	{
	   list[i].click();
	}
},2000);