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

	
});