class friends {
  constructor(f_name, l_name, profile_picture) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.profile_picture = profile_picture;
  }

  displayAvatar(szX, szY, x, y) {
    let img = createImg(this.profile_picture);
    img.size(szX, szY);
    img.position(x, y);
      img.style("padding","0px");
      img.style("border","3px solid #fff");
  }

  displayName(szX, szY, x, y) {
    let tekst = createP(this.f_name + " " + this.l_name);
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

//VERY IMPORTANT
  createProfile() {
    removeElements(); //First remove all DOM-elements (which is all of the rendered content)
    CSSSetup(); //Set up styling elements again

    //Similar setup as in main_file. Uniquely, the callback of the global function, readyProfile, within this specific object, uses the data of the object to partly create the profile-object.
    getData();
    getHobbies();
    readyProfile(this.f_name, this.l_name, birthdayMonth, country, street, city, zipCode, email, phone, job, this.profile_picture, hobbies[0], hobbies[1], hobbies[2]) //hobbyer mangler
    displayProfile();


    for(let i = 0; i < 6; i++) {
      getData();
      readyFriends(i, firstName, lastName, profilePicture);
      displayFriends(i);
    }

    for(let i = 0; i < 3; i++) {
      getData();
      readySuggestedFriends(i, firstName, lastName, profilePicture, random(hobbies)); //hobbyer mangler
      displaySuggestedFriends(i);
    }
  }
}
