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
    } 

      