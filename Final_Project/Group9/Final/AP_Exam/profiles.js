var firstName; //These are global variables on the same level as "profiles, friend, suggested_friend" as seen in the Main_file. Here it is just "hidden" in this file, but the variable is still global since all of the files are loaded prior to the setup().
var lastName;
var country;
var street;
var city;
var zipCode;
var email;
var phone;
var job;
var profilePicture;
var hobbies = [];
var birthdayMonth;

class profiles {
  constructor(f_name, l_name, birthdayMonth, country, street, city, zipCode, email, phone, job, profile_picture, hobby1, hobby2, hobby3) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.birthdayMonth = birthdayMonth;
    this.country = country;
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    this.email = email;
    this.phone = phone;
    this.job = job;
    this.profile_picture = profile_picture;
    this.hobby1 = hobby1;
    this.hobby2 = hobby2;
    this.hobby3 = hobby3;
  }

  displayName(szX, szY, x, y) {
    let tekst = createElement('h2',this.f_name + " " + this.l_name); //"Greg Grady" - also the "element" created here is h2. Just like createP is creating a p-tag.
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayBirthday(szX, szY, x, y) { //Here we actually make up our own data along with one instance of faker.js. Note how the data is very limited in terms of the birth year.
    let tekst = createP(floor(random(1,31)) + " " + this.birthdayMonth + ", 19" + floor(random(65,99)));
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayProfession(szX, szY, x, y) {
    let tekst = createP(this.job);
    tekst.size(szX, szY);
    tekst.parent('job'); //In relation to positioning text in relation to the CSS/HTML-styling.
  }

  displayLocation(szX, szY, strX, strY, cityX, cityY, countryX, countryY) {
    let tekst2 = createP(this.street);
    tekst2.size(szX, szY);
    //tekst2.position(strX, strY);
    tekst2.parent('street');

    let tekst3 = createP(this.zipCode + " " + this.city);
    tekst3.size(szX, szY);
    //tekst3.position(cityX, cityY);
    tekst3.parent('city');

    let tekst4 = createP(this.country);
    tekst4.size(szX, szY);
    //tekst4.position(countryX, countryY);
    tekst4.parent('country');
  }

  displayContact(szX, szY, eX, eY, phX, phY) { //this is not needed
    let tekst1 = createP(this.email);
    tekst1.size(szX, szY);
    //tekst1.position(eX, eY);
    tekst1.parent('email');

    let tekst2 = createP(this.phone);
    tekst2.size(szX, szY);
    //tekst2.position(phX, phY);
    tekst2.parent('phone');
  }

  displayAvatar(szX, szY, x, y) {
    let img = createImg(this.profile_picture);
    img.size(szX, szY);
    img.position(x, y);
      img.style("padding","0px");
      img.style("border","5px solid #fff");
  }

  displayHobbies(szX, szY, x1, y1, x2, y2, x3, y3) {
    let tekst1 = createP(this.hobby1); //Music
    tekst1.size(szX, szY);
    tekst1.parent('music');

    let tekst2 = createP(this.hobby2); //Hobby
    tekst2.size(szX, szY);
    tekst2.parent('hobby');

    let tekst3 = createP(this.hobby3); //Media
    tekst3.size(szX, szY);
    tekst3.parent('media');
  }
}
