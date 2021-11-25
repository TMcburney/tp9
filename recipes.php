<?

/*Recipe loader for TP9 */

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];

if ($name = "Mrs. Siggs Snickerdoodles") {
  
  if ($list == "ingredients") {
    include "ingredients.html";
  } 
  elseif ($list == "equipment") {
    include "equipment.html";
  } 
  elseif ($list == "directions") {
    include "directions.html"
  }
  else {
    echo "1";
  }
  
  elseif ($name == "Chocolate Chip Cookies!") {
    
  if ($list == "ingredients") {
    include "ingredients2.html";
  } 
  elseif ($list == "equipment") {
    include "equipment2.html";
  } 
  elseif ($list == "directions") {
    include "directions2.html"
  }
  else {
    echo "1";
  }
 
    elseif ($name == "The Best Classic Sloppy Joes")
      
      if ($list == "ingredients") {
    include "ingredients3.html";
  } 
  elseif ($list == "equipment") {
    include "equipment3.html";
  } 
  elseif ($list == "directions") {
    include "directions3.html"
  }
  else {
    echo "1";
} 
  else {
  echo "0";
}


