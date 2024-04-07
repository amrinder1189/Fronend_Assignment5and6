// Function for converting the currency 
function Convert() {
    var amount = parseFloat(document.getElementById("value").value);
    var currency = document.getElementById("currency").value;
    var rate;
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount 😒");
      return;
    }
    if (currency === "cad") {
      rate = 0.74; 
      var result = amount * rate;
      document.getElementById("result").innerHTML = "Result: $" + result.toFixed(3) + " USD";
    } else if (currency === "usd") {
      rate = 1.36; 
      var result = amount * rate;
      document.getElementById("result").innerHTML = "Result: $" + result.toFixed(3) + " CAD";
    }
  }

//   function for changing the image of the country 
  function changeCountryImage() {
    var currencySelect = document.getElementById("currency");
    var selectedCurrency = currencySelect.value;
    var selectedOption = currencySelect.options[currencySelect.selectedIndex];
    var currencyImage = selectedOption.getAttribute("data-image");
    document.getElementById("currencyImg").src = "images/" + currencyImage;
  }