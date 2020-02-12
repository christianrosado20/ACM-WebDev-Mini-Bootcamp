var checkout = [];
var totalValue = 0.00;
var subtotalValue = 0.00;
var onlineFee = document.getElementById('online-fee');
var tax = document.getElementById('tax');
var taxValue = 0;
var totalSection = document.getElementById("total");
var subtotalSection = document.getElementById("subtotal");
var bsnButton = document.getElementById('bsn-button');
var daveButton = document.getElementById('dave-button');
var buyButton = document.getElementById('buyButton');
var bsnTickets = 0;
var daveTickets = 0;


totalSection.innerHTML = (0.00).toFixed(2);

daveButton.addEventListener('click', function() {
  daveTickets++;
  subtotalValue += 15.00;
  subtotalSection.innerHTML = subtotalValue;
  var para = document.createElement("li");
  var node = document.createTextNode("Dave Chapelle @UPRM - $15.00");
  para.appendChild(node);
  var element = document.getElementById("ordenes");
  element.appendChild(para);
  //
  tax.innerHTML = (subtotalValue * 0.115).toFixed(2);
  totalValue = (subtotalValue * 1.115) + 6.50;
  totalSection.innerHTML = totalValue.toFixed(2);
  // alert('works');
});


bsnButton.addEventListener('click', function() {
  bsnTickets++;
  subtotalValue += 6.00;
  subtotalSection.innerHTML = subtotalValue;
  var para = document.createElement("li");
  var node = document.createTextNode("BSN: Indios vs Capitanes - $6.00");
  para.appendChild(node);
  var element = document.getElementById("ordenes");
  element.appendChild(para);
  //
  tax.innerHTML = (subtotalValue * 0.115).toFixed(2);
  totalValue = (subtotalValue * 1.115) + 6.50;
  totalSection.innerHTML = totalValue.toFixed(2);
  // alert('works');
});

onlineFee.innerHTML = (6.50).toFixed(2);

buyButton.addEventListener('click', function() {
  alert("PAGO PROCESADO!!!\n" +
        "Total: $" + totalValue.toFixed(2) + "\n" +
        "Gracias por comprar con nosotros!");
  location.reload();
})

// To do
// create <li> tags when you add to cart
