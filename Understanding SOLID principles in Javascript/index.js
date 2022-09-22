/* Clean Code: S.O.L.I.D. */

// **Single Responsibility Principle**

//Bad
class UserSettings {
  constructor(user) {
    this.user = user;
  }
  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }
  verifyCredentials() {
    // ...
  }
}

//Good
// Responsible for handling/ authenticating user
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ...
  }
}
// Responsible for changing/updating user settings
class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}

// **Open/Closed Principle**
// Open for extension but Closed for modification

// BAD
var iceCreamFlavors=["chocolate","vanilla"];
var iceCreamMaker={
 makeIceCream (flavor) {
  if(iceCreamFlavors.includes(flavor)){
   console.log("Great success. You now have ice cream.")
  }else{
   console.log("Epic fail. No ice cream for you.")
  }
 }
}

// GOOD
var iceCreamFlavors=["chocolate","vanilla"];
var iceCreamMaker={
 makeIceCream (flavor) {
  if(iceCreamFlavors.includes(flavor)){
   console.log("Great success. You now have ice cream.")
  }else{
   console.log("Epic fail. No ice cream for you.")
  }
 },
 addFlavor(flavor){
  iceCreamFlavors.push(flavor);
 }
}

addFlavor("strawberry");


// **Liskov Substitution Principle**

//BAD
class Bird {
  fly() {
    //...
  }
}

class Eagle extends Bird {
  dive() {
    //...
  }
}

const eagle = new Eagle();
eagle.fly();
eagle.dive();

class Penguin extends Bird {
  //Problem: Can't Fly!
}

//GOOD
class Bird {
  layEgg() {
    //...
  }
}

class FlyingBird {
  fly() {
    //...
  }
}

class SwimmingBird extends Bird {
  swim() {
    //...
  }
}

class Eagle extends FlyingBird { }
class Penguin extends SwimmingBird { }

const pengiun = new Penguin();
pengiun.swim();
pengiun.layEgg();

const eagle2 = new Eagle();
eagle2.fly();
eagle2.layEgg();


// **Interface Segregation Principle**

//BAD
//validate in any case
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  initiateUser() {
    this.username = this.username;
    this.validateUser();
  }

  validateUser = (user, pass) => {
    console.log("validating......");
  }
}

const user = new User("Mitul", "123456");
console.log(user);
//validating...
//User {
//validateUser: [Function: validateUser],
//username: 'Mitul',
//password: '123456'
// }

//GOOD
//ISP: Validate only if it is necessary
class UserISP {
  constructor(username, password, validate) {
    this.username = username;
    this.password = password;
    this.validate = validate;

    if(validate) {
      this.initiateUser();
    } else {
      console.log('No validation required!');
    }
  }


  initiateUser() {
    this.validateUser(this.username, this.password);
  }

  validateUser = (user, pass) => {
    console.log("validating......");
  }
}

console.log(new UserISP("Mitul", "123456", true));
//validating...
//UserISP {
//validateUser: [Function: validateUser],
//username: 'Mitul',
//password: '123456',
//validate: true
// }

//User with no validation required
console.log(new UserISP("guest", "guest", false));
//no validation required
//UserISP {
//validateUser: [Function: validateUser],
//username: 'guest',
//password: 'guest',
//validate: false
// }


// **Dependency Inversion Principle**

//BAD
http.get('http://address/api/examples', (res) => {
  this.setState({
    key1: res.value1,
    key2: res.value2,
    key3: res.value3
  });
});

//GOOD
const httpRequest = (url, setState) => {
  http.get(url, res => setState.setValues(res));
}

const setState = {
  setValues: (res) => {
    this.setState({
      key1: res.value1,
      key2: res.value2,
      key3: res.value3
    })
  }
}

//Http request, state set is different function
httpRequest('http://address/api/examples', setState);



