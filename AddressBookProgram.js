const prompt = require("prompt-sync") ();
class Contact{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneno = params[6];
        this.email = params[7];
    }

    set firstName(firstName) {
        let pattern = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(pattern.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "First Name is invalid.";
        }
    }
    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        let pattern = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
        if(pattern.test(lastName)) {
            this._lastName = lastName
        } else {
            throw "Last Name is invalid.";
        }
    }
    get lastName() {
        return this._lastName;
    }

    set address(address) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(address)) {
          this._address = address;  
        } else throw "Address Must have 4 Characters";
    }

    get address() {
        return this._address;
    }

    set city(city) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(city)) {
            this._city = city;
        } else throw "State Must have 4 Characters";
    }

    get city() {
        return this._city;
    }

    set state(state) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(state)) {
            this._state = state;
        } else throw "State Must have 4 Charactes";
    }

    get state() {
        return this._state;
    }

    set zip(zip){
        let Pattern = RegExp('^[0-9]{6}$');
        if(Pattern.test(zip)) {
            this._zip = zip;
        } else throw 'Zip Code must be of 6 digits.';
    }

    get zip(){
        return this._zip;
    }

    set phoneno(phoneno) {
        let Pattern = RegExp('^|[0-9]{10}$');
        if(Pattern.test(phoneno)) {
            this._phoneno = phoneno;
        } else throw 'Invalid Phone Number.';
    }

    get phoneno() {
        return this._phoneno;
    }

    set email(email){
        let Pattern = RegExp('^[a-zA-Z0-9]+([+_.-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
        if(Pattern.test(email)){
            this._email = email;
        } else throw "Invalid Email ID";
    }

    get email() {
        return this._email;
    }

    toString(){
        return "First Name ="+ this.firstName
            + " Last Name ="+ this.lastName
            + " Address ="+ this.address
            + " City ="+ this.city
            + " State ="+ this.state
            + " Zip ="+ this.zip
            + " Phone No ="+ this.phoneno
            + " Email ="+ this.email;
    }
}
var addressBookArr = new Array();

function addNewContact() {
    console.log("Enter the First Name :");
    let firstName = prompt();
    if([...addressBookArr].filter(contact=>contact._firstName==firstName).reduce((present,firstName)=>present+=1,0))
    {
        console.log("Name is Already Available")
    } else {
    console.log("Enter the Last Name :");
    let lastName = prompt();
    console.log("Enter the Address :");
    let address = prompt();
    console.log("Enter the City :");
    let city = prompt();
    console.log("Enter the State :");
    let state = prompt();
    console.log("Enter the Zip :");
    let zip = prompt();
    console.log("Enter the Phone No :");
    let phoneno = prompt();
    console.log("Enter the Email ID :");
    let email = prompt();
    let contact = new Contact(firstName,lastName,address,city,state,zip,phoneno,email);
    addressBookArr.push(contact);
    }
}

function editContact() {
    console.log("Enter the First Name :");
    let firstName = prompt();
    for(let contact of addressBookArr) {
        if(contact._firstName == firstName){
            console.log("Enter the Last Name :");
            contact._lastName = prompt();
            console.log("Enter the Address :");
            contact._address = prompt();
            console.log("Enter the City :");
            contact._city = prompt();
            console.log("Enter the State :");
            contact._state = prompt();
            console.log("Enter the Zip :");
            contact._zip = prompt();
            console.log("Enter the Phone Number :");
            contact._phoneno = prompt();
            console.log("Enter the Email ID :");
            contact._email = prompt();        } 
    }
}

function deleteContact(){
    console.log("Enter the First Name :");
    let firstName = prompt();
    for(let contact of addressBookArr) {
        if(contact._firstName == firstName){
            addressBookArr.splice(contact,1);
            console.log("Contact Deleted.")
        }
    }
}
function countContacts(){
    return [...addressBookArr].map(contact => contact._firstName).reduce((start,firstName)=>start+=1,0);
}
function searchPersonthroughCityorstate() {
    console.log("Search through  1. City 2. State :");
    let num = Number(prompt());
    if(num == 1) {
        console.log("Enter the City to Search Person :");
        let city = prompt();
        console.log([...addressBookArr].filter(contact => contact._city == city).map(contact => contact));
    } else {
        console.log("Enter the State to Search Person :");
        let state = prompt();
        console.log([...addressBookArr].filter(contact => contact._state == state).map(contact => contact));
    }
}
function countByCityState() {
    let cityArr = new Array();
    let stateArr = new Array();
    [...addressBookArr].forEach(contact => cityArr[contact._city] ? cityArr[contact._city] += 1 : cityArr[contact._city] = 1);
    [...addressBookArr].forEach(contact => stateArr[contact._state] ? stateArr[contact._state] += 1 : stateArr[contact._state] = 1);

    console.log("City Counts :"+cityArr);
    console.log("State Counts :"+stateArr);
}
function sortAlphabeticallyByName(){
    addressBookArr.sort(function (a, b) {
        if (a._firstName > b._firstName) {
            return 1;
        }
        if (b._firstName > a._firstName) {
            return -1;
        }
        return 0;
    });
    console.log([...addressBookArr]);
}
function sortByCityStateZip(choicenumber){
    if(choicenumber == 1) {
        addressBookArr.sort(function (a, b) {
            if (a._city > b._city) {
                return 1;
            }
            if (b._city > a._city) {
                return -1;
            }
            return 0;
        });
    }
    if(choicenumber == 2) {
        addressBookArr.sort(function (a, b) {
            if (a._state > b._state) {
                return 1;
            }
            if (b._state > a._state) {
                return -1;
            }
            return 0;
        });
    }
    if(choicenumber == 3) {
        addressBookArr.sort(function (a, b) {
            if (a._zip > b._zip) {
                return 1;
            }
            if (b._zip > a._zip) {
                return -1;
            }
            return 0;
        });
    }
    console.log([...addressBookArr]);
}
function addressBook() {
    do{
        console.log("1. Add New Contacts");
        console.log("2. Edit Contacts");
        console.log("3. Delete Contacts");
        console.log("4. Display Contacts");
        console.log("5. Display Contacts Count")
        console.log("6. Search Person through City or State");
        console.log("7. Count By City or State");
        console.log("8. Sort Contact Alphabatically by Name")
        console.log("9. Sort Contact Through City,State,Zip.");
        console.log("10. Quit");
        var choice = Number(prompt());
        switch(choice) {
            case 1:
                addNewContact();
                break;
            case 2:
                editContact();
                break;
            case 3:
                deleteContact();
                break;
            case 4:
                console.log(addressBookArr);
                break;
            case 5:
                console.log("Total Contacts are :"+countContacts());
                break;
            case 6:
                  searchPersonthroughCityorstate();
                break;   
            case 7:
                countByCityState();
                break;  
            case 8:
                sortAlphabeticallyByName();
                break;  
            case 9:
                console.log("Enter the Choice.");
                console.log("1. City \t 2. State \t 3. Zip");
                var choicenumber = Number(prompt());
                sortByCityStateZip(choicenumber);
                break;
            case 10:
            console.log("Thank You");   
                break;
        }
    }while(choice!=10);
}
try{
    addressBook();
} catch(e) {
    console.log(e);
}