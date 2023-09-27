var allProducts = document.querySelectorAll(".list img")
var content = document.querySelector(".content")
var btn = document.querySelector("#btn")
var price = document.querySelector("#price")
var text = document.querySelector("#text")
var totalPrice = 0

allProducts.forEach(function(item){
    item.onclick = function(){
        text.innerHTML += item.getAttribute("name")
        totalPrice += +(item.getAttribute("price"))
    }
})

btn.onclick = function(){
    price.innerHTML = totalPrice
}