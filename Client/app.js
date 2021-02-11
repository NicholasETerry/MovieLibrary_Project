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

        e.preventDefault();
    }

    $(document).ready(function(){
        $.get("https://localhost:44325/api/movie", function(data){
            for(let i = 0; i < data.length; i++){
                $("movieDetails").append(`<div>
                <div>Title: ${JSON.stringify(data[i].title)}</div>
                <div>Director: ${JSON.stringify(data[i].director)}</div>
                <div>Genre: ${JSON.stringify(data[i].genre)}</div>
                </div><br>`);

            }
        })
    })
    $('#my-form').submit( processForm );
})(jQuery);