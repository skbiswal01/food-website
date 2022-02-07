document.querySelector("form").addEventListener("submit",check);
function check(){
    alert("Your order is accepted");
    var time = setTimeout(second(),300);
}

function second(){
    alert("Your order is being cooked")
}