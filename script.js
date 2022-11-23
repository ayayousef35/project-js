var proDuct =document.querySelectorAll(".pro");
var nameProduct =document.querySelector(".name-product");
var btn =document.querySelector(".normal");
var remove =document.querySelector(".remove")
var purchasePrice =document.querySelector(".pro-price");
var totalprice=0;
proDuct.forEach(function(item){
    item.onclick=function() {
        totalprice += parseInt(item.getAttribute("price"))
        nameProduct.innerHTML += item.getAttribute("name") + ","
        nameProduct.style.display="block"
    }
    remove.onclick= function(){
        nameProduct.innerHTML = ""
        nameProduct.style.display="none"
        remove.style.backgroundColor="#003028"
        purchasePrice.style.display="none"
        remove.style.border="none"
        totalprice=0;

    }
})
btn.onclick= function(){
    purchasePrice.style.display="block"
    btn.style.backgroundColor="#003028"
    btn.style.border="none"
    purchasePrice.innerHTML = "$"+(totalprice)
}
