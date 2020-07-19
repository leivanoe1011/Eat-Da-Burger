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

        var burgerId = $(this).data("id");
        
        var burgerUpdate = {
            id: burgerId,
            devoured: true 
        }

        $.put("/api/burgers", burgerUpdate)
            .done(function(data){
                location.reload();
            });
    });
    // End of change-devour
})