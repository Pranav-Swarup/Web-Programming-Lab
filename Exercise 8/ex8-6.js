

function calculateTotal() {
    const adultPrice = 10;
    const childPrice = 5;


    let adults = parseInt(document.getElementById("adults").value) || 0;
    let children = parseInt(document.getElementById("children").value) || 0;


    let totalAmount = (adults * adultPrice) + (children * childPrice);


    document.getElementById("total").value = "₹" + totalAmount;
}
