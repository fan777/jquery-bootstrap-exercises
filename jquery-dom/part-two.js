$(function() {

    $('#movie-list').on('click', '.remove', function(evt) {
        $(evt.target).parent().parent().remove();
    });

    $('#submit-rating').on('click', function(evt) {
        evt.preventDefault();
        
        try {
            if ($('#movieTitle').val().length < 2) {
                throw new Error('Movie title should be more than 2 chars!');
            }
            
            if (!$('#movieRating').val()) {
                throw new Error('Movie rating is missing!')
            }

            if ($('#movieRating').val() < 0 || $('#movieRating').val() > 10) {
                throw new Error('Movie rating should be in between 0 - 10!');
            }
            
            let title = $('#movieTitle').val();
            let rating = $('#movieRating').val();
    
            $('tbody').append('<tr><td class="action"><button class="remove">Remove</button></td><td class="title">'+title+'</td><td>'+rating+'</td></tr>');

            $('#movieTitle').val('');
            $('#movieRating').val('');
        } catch (err) {
            alert(err.message);
        } 
        
    });



});