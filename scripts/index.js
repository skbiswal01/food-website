 

async function getdishes(){
    try {
        let disheslist = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
        var res = await disheslist.json();
        append(res.meals);
        console.log(res);
    }
    catch(error){
        console.log("err:", error)
    }
}
getdishes();

var cart = JSON.parse(localStorage.getItem("cart")) || [];


function append(arr){
    document.getElementById("menu").innerHTML="";

   arr.forEach(function(obj,index){
       
       let dishescard = document.createElement("div")

       let image = document.createElement("img")
       image.src = obj.strMealThumb;

       let title =  document.createElement("p");
       title.textContent = obj.strMeal;

       let value =  Math.round(Math.random() * 500);

       let price = document.createElement("p");
       price.textContent = "Price : INR " + value;

       var btn = document.createElement("button");
       btn.textContent="Add To Cart";
       btn.addEventListener("click",function(){
           addcart(obj,index);
         });
       
       dishescard.append(image, title, price, btn);
       menu.append(dishescard);

   });
    
   function addcart(obj,index){
    cart.push(obj);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Item added To cart");
    document.getElementById("count").textContent= index+1 ;
}
}

