for(i=0;i<document.querySelectorAll(".download").length;i++){
    document.querySelectorAll(".download")[i].addEventListener('mouseenter',function(){
        this.style.backgroundImage = "url(./dl1.png)"
    })
    document.querySelectorAll(".download")[i].addEventListener('mouseleave',function(){
        this.style.backgroundImage = "url(./dl0.png)"
    })
}