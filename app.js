
document.getElementById("kitkat-buy-btn").addEventListener("click",function(){

  const quantity=getQuantity("kitkat-quantity");

  if (isNaN(quantity)) {
    alert("Please Input Quantity Number..");
  }
  else{
    
   const price= getInnerText("kitkat-price");
    let showPrice= showTotal("chocolate");
    const TotalPrice=totalQuantityPrice(price,quantity);
    showPrice.innerText= TotalPrice;
    totalSum()
  }
})




 document.getElementById("rose-buy-btn").addEventListener("click",function(){
  const quantity=getQuantity("rose-quantity");

  if (isNaN(quantity)) {
    alert("Please Input Quantity Number..");
  }
  else{
    
   const Price= getInnerText("rose-price");
    let ShowPrice= showTotal("rose");
    const TotalPrice=totalQuantityPrice(Price,quantity);
    ShowPrice.innerText= TotalPrice;
    totalSum()
  }
})


document.getElementById("diary-buy-btn").addEventListener("click",function(){
  const quantity=getQuantity("diary-quantity");

  if (isNaN(quantity)) {
    alert("Please Input Quantity Number..");
  }
  else{
    
   const Price= getInnerText("diary-price");
    let ShowPrice= showTotal("diary");
    const TotalPrice=totalQuantityPrice(Price,quantity);
    ShowPrice.innerText= TotalPrice;
    totalSum()
  }
})


function handlePromoCode(){

  const promoCode=getQuantity("promo-code");
  if (promoCode==='101') {
    let all_total= document.getElementById("all-total");
    let totalPrice= document.getElementById("total").innerText;
    let discount= parseInt(totalPrice) - parseInt(totalPrice) * 0.1;
    
    all_total.innerText=discount
    
  }
  else{
    alert("Your Promo Code is Weong...");
  }

}



function totalSum(){
  const chocolateTotalPrice= document.getElementById("chocolate").innerText;
  const roseTotalPrice= document.getElementById("rose").innerText;
  const diaryTotalPrice= document.getElementById("diary").innerText;
  const sum= parseInt(chocolateTotalPrice) + parseInt(roseTotalPrice) + parseInt(diaryTotalPrice);
  const budget= document.getElementById("budget").innerText;
  const total = document.getElementById("total");
  total.innerText=sum;
  if (sum > parseInt(budget)) {
    alert("Your Balance is Not Available....");
  }
  
  
}


function getQuantity(id){
  const quantity= document.getElementById(id).value;
  return quantity;
}

function getInnerText(id){
  const innerText= document.getElementById(id).innerText;
  return innerText;
}

function totalQuantityPrice(chocolatePrice,quantity){

  const totalPrice = chocolatePrice * quantity;
  return totalPrice;

}
function showTotal(id){
  const showTotal= document.getElementById(id);
  return showTotal;
}