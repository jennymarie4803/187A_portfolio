$(document).ready(function() {

  /*Put your Javascript code here*/

  /*
    Simple image gallery. Use default settings
  */
  $('.fancybox').fancybox();

});


			var mySlides = new Array();
			
			mySlides[1] = new Image();
			mySlides[2] = new Image();
			mySlides[3] = new Image();
			mySlides[4] = new Image();

		
			mySlides[1].src = "../images/slides/cg3sdj-logo.jpg";
			mySlides[2].src = "../images/slides/IMG_1483_2.jpg";
			mySlides[3].src = "../images/slides/JV t-shirt designBlue.jpg";
			mySlides[4].src = "../images/slides/sailinglogo.jpg";

		
			var myCaptions = new Array();

			myCaptions[1] = "This logo was for the website of a ckae decorating business called Milk and Roses";
			myCaptions[2] = "This was the banner for the Milk and Roses home page";
			myCaptions[3] = "This was a banner I did for the UCSD Sailing Team";
			myCaptions[4] = "This is a square logo that I also did for the sailing team";

	
			var slidenumber = 1;
			var totalslides = mySlides.length - 1;
		
		function showSlide(direction)	{
			if (direction == "next")	{
				(slidenumber == totalslides) ? slidenumber = 1 : slidenumber++;
			}else{
				(slidenumber == 1) ? slidenumber = totalslides : slidenumber--;
			}
			
		document.slideframe.src = mySlides[slidenumber].src;
		document.slidecontrols.caption.value = myCaptions[slidenumber];
		document.slidecontrols.currentslide.value = slidenumber;
		}