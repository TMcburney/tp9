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
} else {
  echo "0";
}
