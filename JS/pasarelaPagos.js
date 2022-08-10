let stripe = Stripe("pk_test_51LV0pmFso8aZRLtvcEZ6ELXUxlehARPsL4Cxqs8PHLtLIymsZeqwmEpOr0TyQoFvCGirSThgzjSBiEhwaAuUZOjm00iFT9OF6w");

document.getElementById("botonCompra").addEventListener("click", function(){
    stripe.redirectToCheckout({
        lineItems: [
            {
                price: "price_1LV15kFso8aZRLtvjlOPVt4I",
                quantity: 1,
            },
        ],
        mode: "subscription",
        succesURL: "hola.com",
        cancelURL: "hola.com"
    }).then(function(result){
        alert(result);
    });
})