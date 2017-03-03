function AddressBook () {
  this.contacts = []
  this.initialComplete = false;
}

AddressBook.prototype.addContact = function (contact) {
  this.contacts.push(contact)
}

AddressBook.prototype.getContact = function (index) {
  return this.contacts[index]
}

AddressBook.prototype.deleteContact = function (index) {
  return this.contacts.splice(index, 1)
}

AddressBook.prototype.getInitialContacts = function (cb) {
    setTimeout(function () {
        this.initialComplete = true
        if (cb) {
            return cb()
        }
    }.bind(this), 2000)
}
