const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function firstPageAnime(){
        var t1 = gsap.timeline();
        
        t1.from("#part1" , {
                y: "-10",
                opacity: 0,
                duration: 1.5,
                ease: Expo.easeInOut
        })

        .to(".boundelem", {
            y:0,
            ease: Expo.easeInOut,
            duration:2,
            delay:-1,
            stagger: 0.2 
        })

        .from(".hero .footer", {
            y:-10,
            opacity:0,
            delay:-1,
            duration:1.5,
            ease: Expo.easeInOut
        })    
}

var xscale=1;
var yscale=1;

var prevxscale=0;
var prevyscale =0;

var timeout=0;


function mousechapta(){
    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);
        
        xscale=gsap.utils.clamp(.8, 1.2 , dets.clientX-prevxscale);
        yscale=gsap.utils.clamp(.8, 1.2 , dets.clientY-prevxscale);

        prevxscale=dets.clientX;
        prevyscale=dets.clientY;

        mousefollower(xscale,yscale)
        timeout= setTimeout(function() {
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(1, 1)`;
        },100);
    })
}
mousechapta();

function mousefollower(xscale,yscale){
    window.addEventListener("mousemove", function (dets){
        document.querySelector("#main");
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale}, ${yscale})`;
    } )
}

mousefollower();
firstPageAnime();




document.querySelectorAll(".elem").forEach(function(elem){
    
    var diffrot=0;
    var rotate=0;

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
            duration:0.5
});
});

   elem.addEventListener("mousemove", function(dets){
            
            var diff= dets.clientY- elem.getBoundingClientRect().top;
            diffrot= dets.clientX-rotate;
            rotate= dets.clientX;
            gsap.to(elem.querySelector("img"),{
                opacity:1,
                ease: Power3,
                top: diff,
                left : dets.clientX,
                rotate: gsap.utils.clamp(-20,20,diffrot*0.5)
   });
   });
});

