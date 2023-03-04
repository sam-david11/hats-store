




var allproducts=document.querySelectorAll("button")
var content=document.querySelector("#the-item")
var wanted=document.querySelector(".item-info")
var totalprice=document.querySelector("#total-price")
var totalprice=0 


allproducts.forEach(function (item){
    item.onclick=function(){
        totalprice += +(item.getAttribute("price"))
        content.innerHTML +=  wanted.getAttribute(".main-img")
        
        if(content.innerHTML!=""){
            btn.style.display="block"
            btn.style.color="red"
           btn.style.width="200px"

        }

    }
})
    