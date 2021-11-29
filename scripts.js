// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"


function loadFileInto(recipeName, listName, whereTo) {

  // 1. creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();
  
  // 2. define the fromFile variable with the passed recipeName and list
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;
  console.log("FromURL: " + fromFile);

  // 3. defines the GET/POST method, the source, and the async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // 4. provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

      document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

    } else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange function

  // 4. let's go -- initiate request and process the responses
  ajax.send();
}
//ajax is done now


newLI = document.createElement("li");
newLI.innerHTML = "*These measurements make about 48 cookies*";
obj = document.querySelector("#ingredients ul") //.classList.toggle("showMe");
obj.insertBefore(newLI, obj.children[10]);

//new recipe object


function Recipe(recipeName,contributorName,imageURL) {
  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;

  this.displayRecipe = function() {

    document.querySelector("#title h1").innerHTML = this.recipe;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.body.style.backgroundImage = "url(" + this.img + ")";
    
    loadFileInto(this.recipe, "ingredients", "#ingredients ul");
    loadFileInto(this.recipe, "equipment", "#equipment ul");
    loadFileInto(this.recipe, "directions", "#directions ol");
  }
}

MrsSiggsSnickerdoodles = new Recipe("Mrs. Siggs Snickerdoodles", "Theo McBurney", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1751192.jpg&w=596&h=596&c=sc&poi=face&q=85")

ChocolateChipCookies = new Recipe("Chocolate Chip Cookies!", "Aida Must", "https://aidamustdtc355.reclaim.hosting/tp4/images/chocolate.jpg")

TheBestClassicSloppyJoes = new Recipe("The Best Classic Sloppy Joes", "Diana Alonso", "https://www.thewholesomedish.com/wp-content/uploads/2020/05/Best-Classic-Sloppy-Joes-600x900-1.jpg")




window.onload = function() {

  
document.querySelector("#r1").onclick = function() {
    MrsSiggsSnickerdoodles.displayRecipe();
  }

  document.querySelector("#r2").onclick = function() {
    ChocolateChipCookies.displayRecipe();
  }
  
  document.querySelector("#r3").onclick = function() {
    TheBestClassicSloppyJoes.displayRecipe();
  }

  
  document.querySelector("#title h1").classList.add("tp6");


  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe")
  }

  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe")
  }

  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe")
  }

  document.querySelector("#title h1").onclick = function() {
    this.classList.toggle("tp6")
  }

  document.querySelector(".copyright").innerHTML += "<p><i> This recipe has been reuploaded without permission, for educational purposes. </i></p>";

  //summon files into main
  document.querySelector("#r1").onclick = function(){
    MrsSiggsSnickerdoodles.displayRecipe();
  }
  document.querySelector("#r2").onclick = function() {
    ChocolateChipCookies.displayRecipe();
  }
  document.querySelector("#r3").onclick = function(){
    TheBestClassicSloppyJoes.displayRecipe();
  }
  

} //end of onload



