var topics = ["Mad Men", "Breaking Bad", "Sex and the City", "Game of Thrones", "Broad City", "Westworld", "Stranger Things", "Girls", "Trailer Park Boys", "Curb Your Enthusiasm"]


$("button").on("click", function () {
            var tvShow = $(this).attr("data-person");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                tvShow + "&api_key=fqor9gTRYarj0Qru9ln70brwDZa236HJ&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
                .done(function (response) {
                    $("#gifs-appear-here").empty();

                    var results = response.data;

                    for (var i = 0; i < results.length; i++) {
                        var gifDiv = $("<div class='item'>");

                        var rating = results[i].rating;

                        var p = $("<p>").text("Rating: " + rating);

                        var tvImage = $("<img>");
                        tvImage.attr("src", results[i].images.fixed_height.url);

                        gifDiv.prepend(p);
                        gifDiv.prepend(tvImage);

                        $("#gifs-appear-here").prepend(gifDiv);
                    }
                });

                //Trying to make gif start as still
                //var state = $(this).attr("data-state");
                //if (state === "still") {
                //$(this).attr("src", $(this).attr("data-animate"));
                //$(this).attr("data-state", "animate");
                //} else {
                //$(this).attr("src", $(this).attr("data-still"));
                //$(this).attr("data-state", "still");
                //}
                //});

                // Function to add a new action button
                // function addNewButton(){
                //$("#addGif").on("click", function(){
                //var action = $("#tv-input").val().trim();
                //if (action == ""){
                //return false;
                //}
                //actions.push(action);
        });