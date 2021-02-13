//display list of movies in the update section
$(document).ready(function(){
    $.get("https://localhost:44325/api/movie", function(data){
        data.map(function(el){
            $("#updateMovies").append(`<div>
            <div>Title: ${JSON.stringify(el.title)}</div>
            <div>Director: ${JSON.stringify(el.director)}</div>
            <div>Genre: ${JSON.stringify(el.genre)}</div>
            </div>
            <div>
            <button onclick="handleUpdate(${JSON.stringify(el.movieId)})">Edit</button>
            
            </div>
            <br>`);
        })
    })
})

function handleUpdate(movieId){
    $.get("https://localhost:44325/api/movie/" +movieId, function(data){
        $("#movieIdEdit").val(data.movieId);
        $("#movieTitleEdit").val(data.title);
        $("#movieDirectorEdit").val(data.director);
        $("#movieGenreEdit").val(data.genre);
    })
}

//function to edit a movie

function updateMovie() {
    var dict = {
        MovieId: $("#movieIdEdit").val(),
        Title: this["title"].value,
        Genre: this["genre"].value,
        Director: this["director"].value
    };

    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(dict),            
        success: function(data, textStatus, jqXhr){//success callback function
            console.log("Updated!!")
        },
        error: function (jgXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};
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
