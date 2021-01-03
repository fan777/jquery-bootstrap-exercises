# Part One

1.  

        $(function() {
            console.log("Let's get ready to party with jQuery!");
        })

2. 

        $('article img').addClass('image-center');

3.  

        $('p').last().remove();

4.  

        $('#title').css('font-size', Math.floor(Math.random() * 100));

5.  

        $('ol').append('<li>I like cats</li>');

6.  

        $('aside').empty().append("<p>i'm sorry for lists, here's a paragraph</p>");
    
7.  

        $('.form-control').on('change', function() {
            let red = $('.form-control').eq(0).val();
            let blue = $('.form-control').eq(1).val();
            let green = $('.form-control').eq(2).val();
            $('body').css('background-color', `rgb(${red},${green},${blue})`);
        });

8.  

        $('img').on('click', function() {
            $(this).remove();
        })