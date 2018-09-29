'use strict' ;

document.addEventListener('DOMContentLoaded', function() {
    
	var menuButton = document.querySelector ( '.for-dropdown' )	;
	
	var submenu= document.querySelector ( '.dropdown' );
	
	
	menuButton.addEventListener( 'mouseover' ,  function(){
	submenu.style.display= 'block' ;
	
	});
	
menuButton.addEventListener( 'mouseout' ,  function(){
	submenu.style.display= 'none' ;
	
    });
	
var buttons = document.querySelectorAll( '.read-more' );
// console.log(buttons);
	
	function showHide(){
		var textArea = this.previousElementSibling; //  pobiera poprzedniego sąsiada z góry
		      if (textArea.style.display === 'none' || textArea.style.display === '') {
         console.log(textArea)
	     textArea.style.display = 'block'; 
			  this.innerHTML= 'MNIEJ <span class="gryphicon gryphicon-chevron-up"></span>' ;
			  }
			  else {

        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
	}
	}
	  for (var i = 0; i <buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
	
});