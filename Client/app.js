(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        $(document).ready(function(){
            $.post("https://localhost:44325/api/movie", function(data){
                $("#movieDetails").append(`<div>
                <div> Title: ${JSON.stringify(data.title)}</div>
                <div> Title: ${JSON.stringify(data.director)}</div>
                <div> Title: ${JSON.stringify(data.genre)}</div>
                </div><br>`);
            })
        })

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);

//As a film enthusiast, I want to be able to add a new movie with details, including title, genre, and director name.