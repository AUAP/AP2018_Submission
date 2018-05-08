class suggested_friends {
  constructor(f_name, l_name, profile_picture, hobby) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.profile_picture = profile_picture;
    this.hobby = hobby;
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

  displayHobby(szX, szY, x, y) {
    let tekst = createP(profile.f_name + " " + profile.l_name + " has " + this.hobby + " in common with "+ this.f_name + " " + this.l_name)
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  //VERY IMPORTANT
  createProfile() {
    removeElements(); //find description in friends.js
    CSSSetup();

    getData();
    getHobbies();
    //The problem with this readyProfile is that the music-hobby will always be replaced by the "common interest" brought along to create a profile. Thus, if that interest is a movie, you will have two movies with one located in the music-category in the browser interface.
    readyProfile(this.f_name, this.l_name, birthdayMonth, country, street, city, zipCode, email, phone, job, this.profile_picture, hobbies[0] = this.hobby, hobbies[1], hobbies[2]);
    displayProfile();


    for(let i = 0; i < 6; i++) {
      getData();
      readyFriends(i, firstName, lastName, profilePicture);
      displayFriends(i);
    }

    for(let i = 0; i < 3; i++) {
      getData();
      readySuggestedFriends(i, firstName, lastName, profilePicture, random(hobbies));
      displaySuggestedFriends(i);
    }
  }
}
