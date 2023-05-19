const content = document.querySelector(".content-rating");

const rating = localStorage.getItem("rating");

content.innerHTML = `<p>You selected ${rating} out of 5</p>`;

