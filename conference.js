function purchase() {
  alert("Purchase Successful")
}

function purchaseTicket() {
  this.purchase();
  var name = '';
  var email = '';
  var number = '';
  var comment = '';

  name = document.getElementById('fname').value;

  email = document.getElementById('email').value;

  number = document.getElementById('numbers').value;

  comment = document.getElementById('comments').value;

  if(name == '' || email == '' || number == '' || comment == '') {
    alert('Input Missing Field');
  } else {
    alert('Form has been submitted');
  }
}