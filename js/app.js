// constructor and prototypes
function Addressbook(firstName,lastName,phoneNumber,email,address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
}
// prototype for user
let User = new Addressbook('femi','OG',09012345678,'fm@yahoo.ng','No 2,bola way lagos');
Addressbook.prototype.fullName = function(){
    return this.firstName + " " + this.lastName
}
Addressbook.prototype.Mobile = function(){
    return '+234' + (this.phoneNumber)
};
Addressbook.prototype.findContact = function(name){
        return this
}

// prototype for user2
let User2 = new Addressbook('Emmanuel', 'James',08012345678,'emmy@yahoo.mail','ahamadu bello way');
Addressbook.prototype.fullName = function(){
    return this.firstName + " " + this.lastName
}
Addressbook.prototype.Mobile = function(){
    return '+234' + (this.phoneNumber)
};
Addressbook.prototype.findContact = function(name){
    return this
}