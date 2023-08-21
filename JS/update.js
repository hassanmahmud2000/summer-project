let totalPrice = 0;
let dicountPrice = 0;

function handleClick (target){
   const listItems = document.getElementById('product-name');
   const itemSellect = (target.childNodes[5].innerText);
   const li = document.createElement('li');
   li.innerText = itemSellect;
   listItems.appendChild(li);
   
   const priceString = (target.childNodes[7].innerText);
   const price = parseFloat(priceString);
    
   totalPrice = parseFloat(totalPrice) + parseFloat(price);
   const total = document.getElementById('totalPrice-area').innerText = parseFloat(totalPrice).toFixed(2);

    //    Coupon
    
    const couponInput = document.getElementById('couponId');
    const applyButton = document.getElementById('applyCoupon');
    function updateApplyButtonStatus() {
        const inputText = couponInput.value.trim();
  
        // Enable the Apply button if input is 'SELL200', otherwise disable it
        if (inputText === 'SELL200') {
          applyButton.removeAttribute('disabled');

          if(  totalPrice >= 200){
            // Discount Calculet
           const dicountPriceFullFloat = 0.2 * totalPrice;
           const discountPrice = parseFloat(dicountPriceFullFloat).toFixed(2);
           const discount = document.getElementById('dicountPrice-area').innerText = dicountPriceFullFloat;
           const totalAfterDicount = total - discountPrice;
           const totalArea = document.getElementById('total').innerText = totalAfterDicount;
           
        }
        
        } else {
          applyButton.setAttribute('disabled', 'true');
        }
      }

      couponInput.addEventListener('input', updateApplyButtonStatus);

      const homeButton = document.getElementById('home-button').addEventListener('click',function(){
        location.reload();
      });

  
}