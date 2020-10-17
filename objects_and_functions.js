// Objects Examples

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

// Global Function
let get_sound = function() {
  return "bark!";
};
// get dog name to modify dom
function getDogName(_dog) {
  document.getElementById("dog-name").textContent = _dog.name;
  /** if dog name is ace   , then color any text with his name in Green **/
  _dog.name == "Ace"
    ? (document.getElementById("dog-name").style.font = "green")
    : (document.getElementById("dog-name").style.font = "blue");
}
