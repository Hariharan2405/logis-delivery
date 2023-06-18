var owl = $('.testimoni');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

var qus=document.querySelectorAll(".question");

qus.forEach(function(q){
	q.addEventListener("click",function(e){
		var current=e.currentTarget;
		current.classList.add("rotate");
		qus.forEach(function(q){
			if(q.classList.contains("rotate")){
				q.parentNode.querySelector(".answer").classList.toggle("hide");
				q.classList.remove("rotate");
			}
			else{
				q.parentNode.querySelector(".answer").classList.remove("hide");
				q.classList.remove("rotate");
			}
			
		})
		// current.parentNode.querySelector(".answer").classList.toggle("hide");
	})
})

var hb=document.querySelector(".header-menu");
var dd=document.querySelector(".drop-down");
var close=document.querySelector(".close");
hb.addEventListener("click",function(){
	dd.style.left="60%";
	dd.style.transition="all 0.5s";
})
close.addEventListener("click",function(){
	dd.style.left="100%";
	dd.style.transition="all 0.5s";
})