let tempId = 0; // stores movieId when handleUpdate function gets called 

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
function findMovie(id){

}
// handleUpdate is call by button onclick right above this comment.
function handleUpdate(movieId){
    $.get("https://localhost:44325/api/movie/" +movieId, function(data){
        $("#movieIdEdit").val(data.movieId);
        $("#movieTitleEdit").val(data.title);
        $("#movieDirectorEdit").val(data.director);
        $("#movieGenreEdit").val(data.genre);
        tempId = movieId;
    })
}

//function to edit a movie

function updateMovie() {
    
    let movieTitle = $("#movieTitleEdit").val();
    let movieDirector = $("#movieDirectorEdit").val();
    let movieGenre = $("#movieGenreEdit").val();
    var dict = {
        movieId : tempId,
        director : movieDirector,
        title : movieTitle,
        genre : movieGenre,
    };

    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(dict),            
        success: function(data, textStatus, jQxhr){//success callback function
            console.log("Updated!!")
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
    getAfterPut(dict);
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
                   
};
function getAfterPut(dictonary){
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        data: JSON.stringify(dictonary),            
        success: function(data, textStatus, jQxhr){//success callback function
            console.log("get after posting to database")
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};
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
