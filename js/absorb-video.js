function playPause(btn,vid) {
    		var vid = document.getElementById(vid);
    		if(vid.paused) {
    			vid.play();	
    			btn.innerHTML = "||";		
    		} else {
    			vid.pause();
    			btn.innerHTML = "&#x25b6;";
    		}
    	}
		
		
setTimeout(function(){
	playPause(this,'sunrise')
},100000)