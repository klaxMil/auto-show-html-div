/*
* auto-show-html-div-1.0.js
*
* author: Claudio Militello
*
* to be used with: auto-show-html-div-1.0.css
*				   Jquery 3 
*
*	Include in your html/jsp file the reqired .css file, Jquery 3 and this .js file.  
*	Make a div of class .auto-show-html-div and js will create a button in the left bottom corner of your div. When you press
*   this button a new div with the original html code of .auto-show-html-div slides down. Press button again to hide it.
*
*/
 
$(document).ready(function() {

            $.fn.toggleDisplayCodeDiv = function(e) { 
                var htmlDiv = $(e).prev();
                var displayDiv = $(e).next();
            	$(displayDiv).text($(htmlDiv).html());
            	$(displayDiv).text($(displayDiv).html());
            	$(displayDiv).html('<pre>'+$(displayDiv).text()+'</pre>');
               		
                if ($(e).text() === 'SHOW CODE') {
                	// --- show inner html as text
                	$(displayDiv).slideDown();
                    $(e).text('HIDE CODE');
                } else {
                	// --- show inner text as html
                	$(displayDiv).slideUp();
                    $(e).text('SHOW CODE');
               }
            };
            
            // ------- create .show-html-button for .auto-show-html-div
        	$(".auto-show-html-div").after("<button type=\"button\" class=\"show-html-btn\"></button>");
            
            // ------- bind function to buttons  
            $(".show-html-btn").on('click', function(){
                $.fn.toggleDisplayCodeDiv(this);
            });
                        
            // -------  automatically adjust button position and text       	
       	  	$(".show-html-btn").text('SHOW CODE');
       	  	$(".show-html-btn").css("left",$(".show-html-btn").prev().css("marginLeft"));
        	$(".show-html-btn").css("top",-$(".show-html-btn").outerHeight());
        	
        	// -------- create display-code divs 
        	$(".show-html-btn").after("<div class=\"display-code-div\">Here we will show the html code of the show-html-div </div>");

            // move display-code div up 
       		$(".display-code-div").css("top",-$(".show-html-btn").outerHeight());
            
});





