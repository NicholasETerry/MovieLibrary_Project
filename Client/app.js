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
    }});
function postMovie(){
    let movieTitle = $("#postTitle").val();
    let movieDirector =$("#postDirector").val();
    let movieGenre = $("#postGenre").val();
    let dict = {
        director: movieDirector,
        title :movieTitle,
        genre: movieGenre
    }
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function( data, textStatus, jQxhr ){
            console.log("post successful. check database for correct information.");
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });

            // $.post("https://localhost:44325/api/movie",JSON.stringify(dict), function(data){
            //     $("#movieDetails").append(`<div>
            //     <div> Title: ${JSON.stringify(data.title)}</div>
            //     <div> Title: ${JSON.stringify(data.director)}</div>
            //         <div> Title: ${JSON.stringify(data.genre)}</div>
            //         </div><br>`);
            //     })
                   
}

//     $("#sendGet").click(function(e){
//         e.preventDefault();
//         $(document).ready(function(){
//             $.get("https://localhost:44325/api/movie", function(data){
//                 for(let i = 0; i < data.length; i++){
//                     $("movieDetails").append(`<div>
//                     <div>Title: ${JSON.stringify(data[i].title)}</div>
//                     <div>Director: ${JSON.stringify(data[i].director)}</div>
//                     <div>Genre: ${JSON.stringify(data[i].genre)}</div>
//                     </div><br>`);
//                 }

//             })
//         })
//     })
//     $('#my-form').submit( processForm );
// })(jQuery);

// //Update the details of a movie, including title, genre, and director name
// (function (){
//     function updateMovie(currentMovie){
        
//     }