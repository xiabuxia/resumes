
$('#book').on('click',function(){
    $(this).css({
        'transform':'rotateX( 0deg) rotateY(0deg) rotateZ(0deg)',
        'left': '-194px'
    })

    $(this).html('<figure class="front"><figure class="book-cover"></figure></figure>');
    $('.front').css({'transform': 'translateX(194px)'})

})


