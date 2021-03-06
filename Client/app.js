"use strict"
var tempId = 0;
// (function($){
//     function processForm(e){
//     }
 
    //display list of movies in a table inside the movie detail section
        $(document).ready(function(){
            $.get("https://localhost:44325/api/movie", function(data){
                var movie = '';
                $.each(data, function(){
                    movie += '<tr>';
                    movie += '<td>'+this.title+'</td>';
                    movie += '<td>'+this.director+'</td>';
                    movie += '<td>'+this.genre+'</td>';
                    movie += '</tr>';
                })
                $('#tableBody').append(movie);
                })
        })
        
        //display list of movies in the update section
        $(document).ready(function(){
            $.get("https://localhost:44325/api/movie", function(data){
                data.map(function(el){
                    $("#listOfMoviesToUpdate").append(`<div>
                    <div>Title: ${JSON.stringify(el.title)}</div>
                    <div>Director: ${JSON.stringify(el.director)}</div>
                    <div>Genre: ${JSON.stringify(el.genre)}</div>
                    </div>
                    <div>
                    <button type="button" class="btn btn-primary btn-sm" onclick="handleUpdate(${JSON.stringify(el.movieId)})">Edit</button>            
                    </div>            
                    <br>`);            
                })        
            })
        })
        function tableBodyUpdate(){
            $.get("https://localhost:44325/api/movie", function(data){
                var movie = '';
                $.each(data, function(){
                    movie += '<tr>';
                    movie += '<td>'+this.title+'</td>';
                    movie += '<td>'+this.director+'</td>';
                    movie += '<td>'+this.genre+'</td>';
                    movie += '</tr>';
                })
                $('#tableBody').append(movie).fadeIn(1000);
                })
        }
        function updateListUpdate(){
            $.get("https://localhost:44325/api/movie", function(data){
                data.map(function(el){
                    $("#listOfMoviesToUpdate").append(`<div>
                    <div>Title: ${JSON.stringify(el.title)}</div>
                    <div>Director: ${JSON.stringify(el.director)}</div>
                    <div>Genre: ${JSON.stringify(el.genre)}</div>
                    </div>
                    <div>
                    <button type="button" class="btn btn-primary btn-sm" onclick="handleUpdate(${JSON.stringify(el.movieId)})">Edit</button>            
                    </div>            
                    <br>`).fadeIn(1000);            
                })        
            })
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
                    console.log("Updated!!");
                    $("#listOfMoviesToUpdate").empty().fadeOut(1000);
                    $("#tableBody").empty().fadeOut(1000);
                    updateListUpdate();
                    tableBodyUpdate();
                },
                error: function (jqXhr, textStatus, errorThrown) {
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
                    $("#listOfMoviesToUpdate").fadeOut(1000)
                    $("#listOfMoviesToUpdate").empty();
                    $("#tableBody").fadeOut(1000)
                    $("#tableBody").empty();
                    updateListUpdate();
                    tableBodyUpdate();
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
                        
        };

 //   $('#my-form').submit( processForm );
//})(jQuery);

