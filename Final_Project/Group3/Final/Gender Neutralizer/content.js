console.log("Gender Neutralizer is running");

//Listenser listening for messages from background.js if there are any channges on the page
chrome.runtime.onMessage.addListener(gotMessage);
//function made if message is recieved from background.js
function gotMessage(message, sender, sendResponse) {
  if (message === "true") { //if the message is equal "true" the walk function is executed
    walk(document.body); //Document.body grabs the entire contents of the current page
  }
}

//The function below was taken and adapted to our code from here: https://goo.gl/ZxfZ3f

function walk(node) { //a function containing the content of the page
 var child, next;
//switch is used to select specific blocks of code of many to be executed
  switch (node.nodeType) { //nodeType distinguishes between the different kinds of nodes (text, fragments, elements etc.)
    case 1: //Element
    case 9: //Document
    case 11: //Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
    break;
    case 3: //text node
    neutralizeGender(node);
    break;
  }
}

function neutralizeGender(textNode) {
var v = textNode.nodeValue;
for (i = 0; i < genders.replacementWords.length; i++) {
  for (j = 0; j < genders.checkWords[i].length; j++) {
    var replaceWord = genders.replacementWords[i];
    var checkWord = genders.checkWords[i][j];
    var checkExpression = new RegExp("\\b" + checkWord + "\\b", "g");
      //Looks for the word with first letter as uppercase
    v = v.replace(checkExpression, replaceWord);
    checkWord = checkWord.toUpperCase();
    replaceWord = replaceWord.toUpperCase();
    checkExpression = new RegExp("\\b" + checkWord + "\\b", "g");
        //looks for the word with all letters as uppercase
      v = v.replace(checkExpression, replaceWord);
      checkWord = checkWord.toLowerCase();
      replaceWord = replaceWord.toLowerCase();
      checkExpression = new RegExp("\\b" + checkWord + "\\b", "gi");
          //Looks for the word with all letters as lowercase
        v = v.replace(checkExpression, replaceWord);
  }
}
textNode.nodeValue = v; //returns new value to the text
}
