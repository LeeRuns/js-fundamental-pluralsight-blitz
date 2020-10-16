
// Global Function 
let get_sound = function() {
  return "bark!";
};

/** Object and Methods Examples*/
let dog1 = {
  name: "Ace",
  breed: "belgian malenois/german shepherd",
  favGame: "chase",
  weight: 73,
  sound: get_sound()
};

/** notice how we can :
 *  1) define a function within object
 *  2) add and remove attributes
 */
let dog2 = {
  name: "Maggie",
  breed: "belgian malenois",
  favGame: "eat",
  weight: 50,
  sound: function() {
    return "whine";
  },
  sex: "Female"

};

function getDogName(_dog) {
  document.getElementById(_dog.name).textContent;
}

