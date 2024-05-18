document.addEventListener("input", function () {
  const nameInput = document.getElementById("name").value.trim();
  const numberInput = document.getElementById("number").value.trim();
  const nextButton = document.getElementById("nextButton");

  if (nameInput !== "" && numberInput !== "") {
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.disabled = true;
  }
});

function hideElementByID(e) {
  const element = document.getElementById(e);
  element.classList.add("hidden");
}
function showElementByID(e) {
  const element = document.getElementById(e);
  element.classList.remove("hidden");
}

const allBtn = document.getElementsByClassName("kbd");

let count2 = 40;
let count = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    if (count >= 4) {
      alert("You have reached the highest limit");
      return;
    }

    count++;
    count2--;

    setInnerText("seat-count-decressd", count2);

    const seatName = e.target.innerText;
    const seatClass = "Economy";
    const price = 550;
    const selectedSeat = document.getElementById("selected-seat");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = seatClass;
    const p3 = document.createElement("p");
    p3.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);

    this.classList.add("bg-green-500");
    selectedSeat.appendChild(li);
    totalPrice("total-price", parseInt(price));

    grandTotalPrice();

    setInnerText("seat-count", count);
  });
}

function totalPrice(id, value) {
  const totalPrice = document.getElementById(id).innerText;

  const convertedPrice = parseInt(totalPrice);
  const sum = convertedPrice + parseInt(value);
  setInnerText("total-price", sum);
}

function grandTotalPrice(status) {
  const totalPrice = document.getElementById("total-price").innerText;
  const convertTotalCost = parseInt(totalPrice);
  if (status == undefined) {
    document.getElementById("grand-total").innerText = totalPrice;
  } else {
    const couponCode = document.getElementById("coupon-input").value;
    if (couponCode == "NEW15") {
      const discount = totalPrice * 0.15;
      document.getElementById("grand-total").innerText = totalPrice - discount;
    } else if (couponCode == "Couple 20") {
      const discount = totalPrice * 0.2;
      document.getElementById("grand-total").innerText = totalPrice - discount;
    } else {
      alert("please enter valid coupon code");
    }
  }
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
