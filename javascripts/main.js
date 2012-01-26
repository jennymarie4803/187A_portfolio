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
			mySlides[5] = new Image();
			mySlides[6] = new Image();
		
			mySlides[1].src = "../images/thumbs/cg3sdj-logo.jpg";
			mySlides[2].src = "images/small/heartbreak-cake1.jpg";
			mySlides[3].src = "images/small/heartbreak-cake2.jpg";
			mySlides[4].src = "images/small/royal-velvet-cake-full.jpg";
			mySlides[5].src = "images/small/birthday-cake.jpg";
			mySlides[6].src = "images/small/brain-cake.jpg";
		
			var myCaptions = new Array();

			myCaptions[1] = "My first attempt at a decorative cake. New Year\'s Party with friends.";
			myCaptions[2] = "The Heartbreak Cake I made for Valentine\'s Day.";
			myCaptions[3] = "It\'s topsy turvy with chocolate cake and filling.";
			myCaptions[4] = "I call it the Royal Velvet Cake because it is made of red velvet cake, and it kind of looks like a castle.";
			myCaptions[5] = "A small vanilla and chocolate cake I made for a friend\'s birthday.";
			myCaptions[6] = "The Brain Cake! I made it for the end of the year party at my neuroscience lab.";
	
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