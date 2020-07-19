$(function() {
    $("#newBurger").on("click", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: false // I could default this in the DB
        }

        $.post("/api/burgers", newBurger)
            .done(function(data){
                // Reload the page to get the updated list
                location.reload();
            });

    })
    // End of #newBurger

    $(".change-devour").on("click", function(event){
        event.preventDefault();

        console.log("In Change Devour click");

        var burgerId = $(this).data("id");
        
        console.log(burgerId);

        // I could also pass the ID to the URL
        var burgerUpdate = {
            id: burgerId,
            devoured: true 
        }

        console.log(burgerUpdate);

        $.ajax("/api/burgers/" + burgerId, {
            type: "PUT",
            data: burgerUpdate
        })
        .then(function(data){
            // Reload the page to get the updated list
            location.reload();
        })
       
    });
    // End of change-devour
})