


/********** Renderer ***********/
var anaoRenderer =  function() {        
    var coefficient = 3;
    var containerPadding = 20;
    var faceBoxPaddingAndMargin = 7;
    var contentContainer = document.querySelector(".posts-items");
    var h = contentContainer.offsetHeight;
    var w = contentContainer.offsetWidth; 
    var distance = 4;
    var fontFator = 0.1;
    var workWidth =  Math.trunc(w*0.95);
    var workHeight = h - 128; // botton height of button actions + margin-left.
    var faceBoxWidth = Math.trunc(workWidth / coefficient);
    var old_faceBoxWidth = faceBoxWidth;
    // var imgList = this.querySelectorAll('.face-box img');
    var faceboxList = document.querySelectorAll('.post-item');
    // divisio not exact
    if (faceBoxWidth % 2 != 0) {
        faceBoxWidth -= 1;
    }
    faceBoxWidth -= containerPadding; // padding by elem 
    // face-boxes
    for (var i = 0; i < faceboxList.length; i++){
        var elem = faceboxList[i];
        // containter parent per item
        elem.style.width = faceBoxWidth + "px";
        elem.style.height = faceBoxWidth + "px";
    }
    // padding internal of container
    x_1 = (faceboxList.length / coefficient) * (old_faceBoxWidth + (faceBoxPaddingAndMargin*2)); // x'
    var paddingTotal = h - x_1;
    // contentContainer.style.paddingTop = paddingTotal / 2 + "px";
}

/*******************************/
/*** Actions based on events ***/
/*******************************/
$(".btn-title").on('click', function(e){
    var menubar = document.querySelector('#menubarright');
    if (menubar.classList.contains('closed')) {
        menubar.classList.remove('closed');
        menubar.classList.remove('shadow');
    } else {
        menubar.classList.add('closed');
        setTimeout(function(){
            menubar.classList.add('shadow');
        }, 500);

    }
})
$("#btn-menu").on('click', function(e){
    var menubar = document.querySelector('#menubarright');
    menubar.classList.remove('closed');
})
