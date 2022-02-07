
var cart = JSON.parse(localStorage.getItem("cart")) || [];
cartar(cart);
function cartar(arr){
    document.getElementById("cart").innerHTML="";
    arr.map(function (obj,index){
        var div = document.createElement("div");

        var img = document.createElement("img");
        img.src = obj.strMealThumb;
        img.id= "dish2";

        var p = Math.floor(Math.random()*499)+1;
        var pric = document.createElement("p");
        pric.textContent = `${p} ₹`;
        
        var btn = document.createElement("button");
        btn.textContent="Remove";
          btn.addEventListener("click",function(){
            removecart(index);
          });

          div.append(img,pric,btn);
          
          document.getElementById("cart").append(div);
          to(p);
    })
}
function removecart(index){
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    cartar(cart);
}
function to(p){
    if(cart == []){
       var To = 0;
    }else{
        var To = p;
    }
    To += Number(p)
   document.querySelector("#total").textContent=`The total price of cart: ${To}`
}

function addpayment() {
   
      window.location.href = "checkout.html";
    
  }