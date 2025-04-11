document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const receipt = document.getElementById("receipt");


    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();


            let data = {
                customer: form.name.value,
                contact: form.phone.value,
                mail: form.email.value,
                apples: form.apple.value || 0,
                bananas: form.banana.value || 0,
                avocados: form.avocado.value || 0
            };


            localStorage.setItem("orderData", JSON.stringify(data));
            window.location = "receipt.html";
        });
    }


    if (receipt) {
        let order = JSON.parse(localStorage.getItem("orderData"));
        if (!order) {
            receipt.innerHTML = "<p>No order found.</p>";
            return;
        }


        let total = order.apples * 10 + order.bananas * 5 + order.avocados* 7;
        receipt.innerHTML = `
            <p><strong>Name:</strong> ${order.customer}</p>
            <p><strong>Phone:</strong> ${order.contact}</p>
            <p><strong>Email:</strong> ${order.mail}</p>
            <h3>Total Cost: $${total}</h3>
        `;
    }
});
