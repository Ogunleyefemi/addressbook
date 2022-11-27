function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
  }
//   
AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };
//   
AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  }
  function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }
  AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id] != undefined) {
      return this.contacts[id];
    }
    return false;
  };
  AddressBook.prototype.deleteContact = function(id) {
    if (this.contacts[id] === undefined) {
      return false;
    }
    delete this.contacts[id];
    return true;
  };
//   let phoneBook = new AddressBook();
//   let User = new Addressbook('femi','OG',09012345678,'fm@yahoo.ng','No 2,bola way lagos');
// let User2 = new Addressbook('Emmanuel', 'James',08012345678,'emmy@yahoo.mail','ahamadu bello way');
// User Interface Logic ---------
let addressBook = new AddressBook();
// function to display contact on browser
function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

// function to show contact
function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

// function to attach contact listner (event bubbling)

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
}
// function to delete contact with the button


$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();

    // to clear form after submission
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  });
})
//   let myOg = new Contact("Ada", "Lovelace", "503-555-0100");
//   let myMan = new Contact("Grace", "Hopper", "503-555-0199");
//   phoneBook.addContact(myOg);
//   phoneBook.addContact(myMan);

// prototype for user2

// Addressbook.prototype.fullName = function(){
//     return this.firstName + " " + this.lastName
// }
// Addressbook.prototype.Mobile = function(){
//     return '+234' + (this.phoneNumber)
// };
// Addressbook.prototype.findContact = function(name){
//     return this
// }