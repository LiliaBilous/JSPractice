let inputField = document.getElementById("price");
let currentPrice = document.querySelector('.current-price');
let closeButton = document.querySelector('.close-symbol');
let errorMessage = document.getElementById('error');
let priceHolder = document.querySelector('.price-holder');

inputField.onfocus = function () {
    inputField.style.outline = '2px solid #346751';
    inputField.style.color = '#346751';
    inputField.value = '';
    currentPrice.innerHTML = '';
    currentPrice.style.visibility = 'hidden';
    closeButton.style.visibility = 'hidden';
    errorMessage.style.visibility = 'hidden';
}
inputField.onblur = function() {
    let price = parseFloat(inputField.value);

    if(!isNaN(price) && price >= 0) {
        priceHolder.style.visibility = 'visible';
        currentPrice.innerHTML = `Current Price: $ ${price}`;
        currentPrice.style.visibility = 'visible';
        closeButton.style.visibility = 'visible';
    } else {
        errorMessage.style.border = '1px solid #C84B31';
        errorMessage.style.color = '#C84B31';
        errorMessage.style.visibility = 'visible';
    }
    inputField.style.outline = 'none';
}

closeButton.onclick = function() {
    inputField.value = '';
    
    currentPrice.innerHTML = '';
    currentPrice.style.visibility = 'hidden';
    closeButton.style.visibility = 'hidden';
    priceHolder.style.visibility = 'hidden';
}