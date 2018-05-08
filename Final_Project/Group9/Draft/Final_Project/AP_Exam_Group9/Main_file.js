var profile;
var friend = [];
var suggested_friend = [];
//Variables for the upcoming objects.



function preload() {
  Music = loadJSON('Music.json');
  Activities = loadJSON('Activities.json');
  Movies = loadJSON('movies.json');
}

function CSSSetup() {
  banner = createImg('https://www.samyakhospital.com/wp-content/uploads/2016/12/dbtreesPhotoxpress_9939515.jpg');
    banner.size(windowWidth,300);
    banner.position(0,50);

  h3 = createElement('h2', 'Friends');
  h3.position(1160,248);
  h3.style('font-size','25px')
  //h3.style('text-shadow','1px,2px,2px,#000;')

  h2 = createElement('h2', 'Suggested Friends');
  h2.position(970,430);
  h2.style('font-size','25px');
  h2.style('color', '#f1f1f1')
}





//Here we go!
function setup() {
  CSSSetup(); //Header, Banner, Avatar

  //PROFILE
  //Data in our selected categories is querried and put into variables that are carried over to be used in readyProfile.
  getData();

  //Hobbies are however excluded from getData. This is because the hobbies should only be loaded once, since the suggested_friends should have the same hobby as the current profile.
  //the getHobbies chooses three hobbies from our JSON-files and puts them in an array
  getHobbies();

  //the profile is instantiated as an object. Here getData-variables and the three getHobbies-variables are inserted as arguments in the callback of readyProfile.
  //These arguments are carried over to the function readyProfile itself, where they are inserted as the attributes of the object.
  readyProfile(firstName, lastName, birthdayMonth, country, street, city, zipCode, email, phone, job, profilePicture, hobbies[0], hobbies[1], hobbies[2]);

  //Using the now instantiated object, the displayProfile goes through several display functions (name, location etc.), which results in the final rendering of data.
  displayProfile();


  //FRIENDS - same logic as the readying of the profile.
  for(let i = 0; i < 6; i++) {
    getData();
    readyFriends(i, firstName, lastName, profilePicture); //The "I" is carried over to create six different object and displaying each of them.
    displayFriends(i);
  }
  //SUGGESTED_FRIENDS - same logic
  for(let i = 0; i < 3; i++) {
    getData();
    readySuggestedFriends(i, firstName, lastName, profilePicture, random(hobbies)); //From the selection of three hobbies, this functions chooses one random hobby for each suggested_friend.
    displaySuggestedFriends(i);
  }
}




//GLOBAL FUNCTIONS - these are called upon several times in the different files.
function getData() { //This one is called upon a lot. Everytime, it replaces the previous content of the variables with new data from the faker.js library (who knows how faker chooses this data?)
  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
  birthdayMonth = faker.date.month();
  country = faker.address.country();
  street = faker.address.streetName();
  city = faker.address.city();
  zipCode = faker.address.zipCode();
  email = faker.internet.email();
  phone = faker.phone.phoneNumber();
  job = faker.name.jobTitle();
  profilePicture = faker.image.avatar();
}

function getHobbies() {
  hobbies = [Music[floor(random(0, 70))], Activities[floor(random(0, 70))], Movies[floor(random(0, 70))]]; //Floor is used because it has to use numbers such as (1, 2, 3) and not (0.32)
}

function mousePressed() {
  if(mouseX > 2 && mouseX < 67 && mouseY > -120 && mouseY < -55) {
    friend[0].createProfile();
  } else if(mouseX > 83 && mouseX < 145 && mouseY > -120 && mouseY < -55) {
    friend[1].createProfile();
  } else if(mouseX > 163 && mouseX < 226 && mouseY > -120 && mouseY < -55) {
   friend[2].createProfile();
 } else if(mouseX > 242 && mouseX < 306 && mouseY > -120 && mouseY < -55) {
   friend[3].createProfile();
 } else if(mouseX > 323 && mouseX < 385 && mouseY > -120 && mouseY < -55) {
   friend[4].createProfile();
 } else if(mouseX > 400 && mouseX < 465 && mouseY > -120 && mouseY < -55) {
   friend[5].createProfile();
  }

  if(mouseX > 175 && mouseX < 225 && mouseY > 90 && mouseY < 140) {
   suggested_friend[0].createProfile();
 } else if(mouseX > 175 && mouseX < 225 && mouseY > 200 && mouseY < 250) {
   suggested_friend[1].createProfile();
 } else if(mouseX > 175 && mouseX < 225 && mouseY > 310 && mouseY < 360) {
   suggested_friend[2].createProfile();
  }
}


function draw() {
  console.log(mouseX, mouseY);
}

// //Greg Grady #alwaysremember

//Here the data from getData, added as arguments in the callback of readyProfile, is finally put to use as parameters in creating an object.
function readyProfile(firstName, lastName, birthdayMonth, country, street, city, zipCode, email, phone, job, profilePicture, hobby1, hobby2, hobby3) {
  profile = new profiles(
    firstName,
    lastName,
    birthdayMonth,
    country,
    street,
    city,
    zipCode,
    email,
    phone,
    job,
    profilePicture,
    hobby1,
    hobby2,
    hobby3
  )
}
//All of the display-commands with the related coordinates for position and size. Look in the class-file for their actual content.
function displayProfile() {
  profile.displayName(400, 10, 365, 280);
  profile.displayBirthday(100, 10, 351, 350);
  profile.displayAvatar(200, 200, 120, 190);
  profile.displayProfession(1000, 10, 300, 100);
  profile.displayLocation(1000, 10, 450, 100, 500, 100, 550, 100);
  profile.displayContact(1000, 10, 600, 100, 600, 150);
  profile.displayHobbies(1000, 10, 100, 500, 100, 550, 100, 600);
}




function readyFriends(i, firstName, lastName, profilePicture) {
  friend[i] = new friends(
    firstName,
    lastName,
    profilePicture
  )
}

function displayFriends(i) {
  friend[i].displayAvatar(60, 60, 800+i*80, 300); //the "i" is used to render the "friends" in different spots rather than on top of one another.
  friend[i].displayName(10, 10, 810+i*80, 360);
}




function readySuggestedFriends(i, firstName, lastName, profilePicture, hobby) {
  suggested_friend[i] = new suggested_friends(
    firstName,
    lastName,
    profilePicture,
    hobby
  )
}

function displaySuggestedFriends(i,j) {
  suggested_friend[i].displayAvatar(50, 50, 970, 508+110*i);
  suggested_friend[i].displayName(50, 50, 975, 555+110*i);
  suggested_friend[i].displayHobby(200, 100, 1060, 510+118*i);
}
