$(function() {
    console.log("Let's get ready to party with jQuery!");

    $('article img').addClass('image-center');

    $('article p').last().remove();

    $('#title').css('font-size', Math.floor(Math.random() * 100));

    $('ol').append('<li>I like cats</li>');
   
    $('aside').empty().append("<p>i'm sorry for lists, here's a paragraph</p>");
    
    
    $('.form-control').on('change', function() {
        let red = $('.form-control').eq(0).val();
        let blue = $('.form-control').eq(1).val();
        let green = $('.form-control').eq(2).val();
        $('body').css('background-color', `rgb(${red},${green},${blue})`);
    });

    $('img').on('click', function() {
        $(this).remove();
    });
});
